import React, { useState, ReactNode } from "react";
import { Form, Checkbox } from "antd";

interface Props {
  title: string;
  children: ReactNode;
}

export function ComponentToggler({ title, children }: Props) {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  return (
    <>
      {showComponent && children}
      <Form.Item>
        <Checkbox
          onChange={({ target: { checked } }) => setShowComponent(checked)}
        >
          Show '{title}'
        </Checkbox>
      </Form.Item>
    </>
  );
}
