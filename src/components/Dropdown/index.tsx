import React, { ReactNode } from "react";

import { Collapse } from "antd";

import "./dropdown.css";

type DropdownProps = {
  label: ReactNode | string;
  children: ReactNode;
};

export function Dropdown({ label, children }: DropdownProps) {
  const items = [{ label, children }];

  return <Collapse className="dropdown" bordered={false} items={items} />;
}
