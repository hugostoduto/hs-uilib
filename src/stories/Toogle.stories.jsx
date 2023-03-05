import React from 'react';
import { Toggle } from '../components/Buttons/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
  args: {
    children: 'Toggle',

  },
  argTypes: {
    children: { type: 'string' },

  },
};

export const Template = (args) => {
  return (
    <div>
      <Toggle {...args} />
    </div>
  );
};
