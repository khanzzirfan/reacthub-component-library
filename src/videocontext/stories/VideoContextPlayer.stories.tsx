import React from "react";
import { Effect, SourceVideo } from "../component";

import { PlayerProps } from "../component";
import { VideoContextPlayerDemo } from "./VideoContextPlayerDemo";

export default {
  title: "Media/VideoContextPlayer",
  component: VideoContextPlayerDemo,
};

const Template = (args) => <VideoContextPlayerDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // sources: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  sources:
    "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761",
  autoPlay: false,
  size: { width: 500, height: 500 },
} as PlayerProps;

export const Trailer = Template.bind({});
Trailer.args = {
  // sources: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  sources:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  autoPlay: false,
  play: false,
  size: { width: 500, height: 500 },
} as PlayerProps;

export const Grayscale = Template.bind({});
Grayscale.args = {
  // sources: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  sources: [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      start: 0,
      end: 200,
      effect: Effect.MONOCHROME,
    },
  ],
  autoPlay: false,
  play: false,
  size: { width: 500, height: 500 },
} as PlayerProps;

export const Transitions = Template.bind({});
Transitions.args = {
  // sources: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  sources: [
    {
      src: "https://pmdvod.nationalgeographic.com/NG_Video/596/311/1370718787631_1542234923394_1370715715931_mp4_video_1024x576_1632000_primary_audio_eng_3.mp4",
      start: 0,
      end: 10,
      effect: Effect.MONOCHROME,
    },
    {
      src: "https://eyecastvideoeditormediafiles194906-dev.s3.ap-southeast-2.amazonaws.com/public/irfan%40trolio.com/6296919af24306de544bd710/videos/big_buck_bunny_720p_1mb.mp4",
      start: 10,
      end: 20,
      effect: Effect.MONOCHROME,
    },
  ],
  autoPlay: false,
  play: false,
  size: { width: 500, height: 500 },
} as PlayerProps;
