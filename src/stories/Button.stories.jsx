import React from 'react';
import { Button } from '../components/Buttons/Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
