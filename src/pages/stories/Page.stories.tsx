import React from "react";

import { Page } from "../component/Page";
import * as HeaderStories from "../../header/stories/Header.stories";

export default {
  title: "Layouts/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
