import React from "react";
import VideoContext, { SourceNode } from "videocontext";
import { Effect, PlayerProps, SourceVideo } from "./videocontext.type";

export const VideocontextPlayer = ({
  size,
  onload,
  onloaded,
  ondestroy,
  onseek,
  onplay,
  ondurationchange,
  onended,
  onerror,
  onPlaying,
  onrender,
  ontimeupdate,
  autoPlay,
  sources,
  canvasId,
  play,
}: PlayerProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const ctx = React.useRef<VideoContext>(null);
  const requestAnimRef = React.useRef(null);
  // const videoNode:

  /** setup animation frame to update any events to callback */
  const animate = (time) => {
    // Change the state according to the animation
    videoCurrentTimeUpdate();
    requestAnimRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestAnimRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestAnimRef.current);
  }, []);

  React.useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.width = size.width;
    canvasRef.current.height = size.height;
    ctx.current = new VideoContext(canvasRef.current);
    ctx.current.crossorigin = "anonymous";
    ctx.current.muted = "muted";
    renderVideoBySource(sources);
    ctx.current.registerCallback("ended", videocontextEnded);

    // unregister
    return () => {
      ctx.current.unregisterCallback(videocontextEnded);
      ctx.current = null;
    };
  }, [sources, size]);

  // component did update
  React.useEffect(() => {
    if (!canvasRef.current || !ctx.current) return;
    if (play) {
      ctx.current.play();
    } else {
      ctx.current.pause();
    }
  }, [play]);

  React.useEffect(() => {
    if (!canvasRef.current || !ctx.current) return;
    if (autoPlay) {
      ctx.current.play();
    }
  }, [autoPlay]);

  const videoStateLoad = (): void => {
    if (onload) {
      onload();
    }
  };

  const videoStateLoaded = (): void => {
    if (onloaded) onloaded();
  };

  const videodestroy = (): void => {
    if (ondestroy) ondestroy();
  };

  const videoSeek = (node: SourceNode, time: number): void => {
    if (onseek) onseek(time);
  };

  const videoPlay = (): void => {
    if (onplay) onplay();
  };

  const videoPause = (): void => {
    if (ctx.current) {
      ctx.current.pause();
    }
  };

  const videoStop = (): void => {
    if (ctx.current) {
      ctx.current.pause();
      ctx.current.currentTime = 0;
    }
  };

  const videoDurationChange = (node: SourceNode, duration: number): void => {
    if (ondurationchange) ondurationchange(duration);
  };

  const videoCurrentTimeUpdate = (): void => {
    if (ctx.current) {
      if (ontimeupdate) {
        ontimeupdate(ctx.current.currentTime);
      }
    }
  };

  const videoEnded = () => {
    if (onended) {
      console.log("videoOnEnded event");
      onended();
    }
  };

  const videoError = () => {
    if (onerror) onerror();
  };

  const videoRender = (node: SourceNode, currentTime: number) => {
    drawVideo();
    if (onrender) onrender(currentTime);
  };

  const currentTime = (time: number) => {
    if (!ctx.current) return;
    ctx.current.currentTime = time;
  };

  const drawVideo = () => {
    if (!ctx.current) return;
    if (play && onPlaying) {
      onPlaying(ctx.current.currentTime);
    }
  };

  const renderVideoBySource = (sources: SourceVideo[] | string): void => {
    if (typeof sources === "string") {
      connectVideoNodeToDestination(sources);
    } else {
      sources.forEach((source: SourceVideo) => {
        connectVideoNodeToDestination(
          source.src,
          source.start,
          source.sourceStart,
          source.end,
          source.effect,
        );
      });
    }

    if (autoPlay) {
      ctx.current.play();
    }
  };

  const connectVideoNodeToDestination = (
    url: string,
    start: number = 0,
    sourceStart: number = 0,
    end: number = Infinity,
    effect: Effect = Effect.NONE,
  ): void => {
    const videoNode = ctx.current.video(url, sourceStart);
    videoNode.crossOrigin = "anonymous";
    videoNode.start(start);
    videoNode.stop(end);

    videoNode.registerCallback("load", videoStateLoad);
    videoNode.registerCallback("loaded", videoStateLoaded);
    videoNode.registerCallback("durationchange", videoDurationChange);
    videoNode.registerCallback("play", videoPlay);
    videoNode.registerCallback("render", videoRender);
    videoNode.registerCallback("seek", videoSeek);
    videoNode.registerCallback("destory", videodestroy);
    videoNode.registerCallback("ended", videoEnded);
    videoNode.registerCallback("error", videoError);
    videoNode.registerCallback("content", videoCurrentTimeUpdate);

    if (effect && effect !== Effect.NONE) {
      console.log("register monochrome effects effects");
      const filterNode = ctx.current.effect(VideoContext.DEFINITIONS[effect]);
      //Give a sepia tint to the monochrome output (note how shader description properties are automatically bound to the JavaScript object).
      // vcEffect.outputMix = [1.25, 1.18, 0.9];
      videoNode.connect(filterNode);
      // console.log("effects definition");
      // console.log(VideoContext.DEFINITIONS);
      // console.log(ctx.current.DEFINITIONS);
      filterNode.connect(ctx.current.destination);
    } else {
      videoNode.connect(ctx.current.destination);
    }
  };

  const videocontextEnded = (): void => {};

  const resetPlayer = (): void => {
    if (!ctx.current) return;
    ctx.current.reset();
  };

  return <canvas ref={canvasRef} id={canvasId || "webgl-player-canvas"} />;
};
