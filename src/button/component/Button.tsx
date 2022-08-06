import React from "react";
import "./button.css";
import { IButtonProps, SizeProps } from "./Button.types";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}): JSX.Element => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: SizeProps.medium,
  onClick: undefined,
};
