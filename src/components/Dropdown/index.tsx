import React, { ReactNode } from "react";

import { Collapse } from "antd";

type DropdownProps = {
  label: ReactNode | string;
  children: ReactNode;
};

export function Dropdown({ label, children }: DropdownProps) {
  const items = [{ label, children }];

  return <Collapse bordered={false} items={items} />;
}
