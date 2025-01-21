import { MouseEventHandler, ReactNode } from "react";
import { Button as AntButton } from "antd";

type ButtonProps = {
  children: ReactNode | string;
  handleClick: MouseEventHandler;
};

export function Button({ children, handleClick }: ButtonProps) {
  return <AntButton onClick={handleClick}>{children}</AntButton>;
}
