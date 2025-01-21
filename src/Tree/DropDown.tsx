import { ReactNode, useState } from "react";

type DropDownProps = {
  label: ReactNode | string;
  children: ReactNode;
};

export function DropDown({ label, children }: DropDownProps) {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  const trigger = (
    <input
      className="dropdown_trigger"
      checked={open}
      onChange={handleChange}
    />
  );

  return (
    <div>
      <div>
        {label}
        {trigger}
      </div>
      {open && children}
    </div>
  );
}
