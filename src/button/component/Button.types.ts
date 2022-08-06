import React from "react";

export enum SizeProps {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export interface IButtonProps {
  /** primary color button */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: SizeProps;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
