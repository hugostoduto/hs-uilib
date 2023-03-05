import React from 'react';
import { Header } from '../components/Header/Header'

export default {
  title: 'Header',
  component: Header,
  args: {
    logo: 'Header',
    items: [{ item: "Item1", links: "link/item1" }, { item: "item2", links: "link/item2" }],
    newPage: false
  },
  argTypes: {
    logo: { type: 'string' },
    items: { type: 'array' },
    newPage: { type: "boolean" }
  },
};

export const Template = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
