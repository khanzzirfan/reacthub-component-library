export type CanvasSize = {
  width: number;
  height: number;
};

export enum SourceType {
  VIDEO = "video",
  AUDIO = "audio",
  IMAGE = "image",
}

export enum Effect {
  NONE = "NONE",
  MONOCHROME = "MONOCHROME",
  COLORTHRESHOLD = "COLORTHRESHOLD",
  STATIC_EFFECT = "STATIC_EFFECT",
  AAF_VIDEO_SCALE = "AAF_VIDEO_SCALE",
  HORIZONTAL_BLUR = "HORIZONTAL_BLUR",
  VERTICAL_BLUR = "VERTICAL_BLUR",
  AAF_VIDEO_CROP = "AAF_VIDEO_CROP",
  AAF_VIDEO_POSITION = "AAF_VIDEO_POSITION",
  AAF_VIDEO_FLIP = "AAF_VIDEO_FLIP",
  AAF_VIDEO_FLOP = "AAF_VIDEO_FLOP",
}

export type SourceVideo = {
  src: string;
  start: number;
  sourceStart?: number;
  duration: number;
  effect: Effect;
  type: SourceType;
};

export interface PlayerProps {
  sources: SourceVideo[];
  size: CanvasSize;
  onload?: () => void;
  onloaded?: () => void;
  ondestroy?: () => void;
  onseek?: (time: number) => void;
  onplay?: () => void;
  onpause?: () => void;
  onstop?: () => void;
  ondurationchange?: (duration: number) => void;
  ontimeupdate?: (currenttime: number) => void;
  onended?: () => void;
  onrender?: (currentTime: number) => void;
  onerror?: () => void;
  canvasId?: string;
  autoPlay?: boolean;
  play?: boolean;
  onPlaying?: (currentTime: number) => void;
}

export interface PlayerState {
  play: boolean;
}
