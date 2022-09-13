import React from "react";

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
  sources: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  autoPlay: false,
  play: false,
  size: { width: 500, height: 500 },
} as PlayerProps;
