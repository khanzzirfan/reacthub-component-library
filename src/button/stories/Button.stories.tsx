import React from "react";
import { SizeProps } from "../component/Button.types";
import { Button } from "../component/Button";

export default {
  title: "Forms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: SizeProps.large,
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: SizeProps.small,
  label: "Button",
};
