import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Form, Input, Button } from 'antd';

interface Props {
}

export const StateHooksComponent: React.FC<Props> = ({}) => {
  const defaultName = 'Béla';

  const [name, setName] = useState<string>(defaultName);

  function onNameChange (e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    console.log('onNameChange', e.target.value);
  }; 

  function handleSubmit (values: any) {
    console.log('Submit', values, name);
  };

  return (
      <Form layout="inline" onFinish={handleSubmit}>
          <Form.Item>
            <Input type="text" placeholder="name" value={name} onChange={onNameChange} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary"> Submit </Button>
          </Form.Item>
      </Form>
  )
}
