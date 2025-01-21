import { ChangeEvent, useState } from "react";
import { Input } from "antd";

import { Button } from "components/Button";

type FormProps = {
  title: string;
  submitTitle: string;
  submit: (value: string) => void;
};

export function Form({ title, submitTitle, submit }: FormProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    submit(value);
  };

  return (
    <div>
      <Input title={title} value={value} onChange={handleChange} />
      <Button handleClick={handleClick}>{submitTitle}</Button>
    </div>
  );
}
