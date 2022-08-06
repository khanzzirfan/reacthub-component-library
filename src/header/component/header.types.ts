import React from "react";

export interface IHeaderProps {
  /** primary color button */
  user: any;
  onLogin: React.MouseEventHandler<HTMLButtonElement>;
  onLogout: React.MouseEventHandler<HTMLButtonElement>;
  onCreateAccount: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
