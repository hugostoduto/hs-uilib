import React from 'react';
import { Card } from '../components/Cards/Card';

export default {
  title: 'Card',
  component: Card,
  args: {
    image: "https://images.unsplash.com/photo-1678213786731-0d78bf749dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    alt: "test",
    title: "Foto com Neve",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    btnTitle: "Learn More"
  },
  argTypes: {
    image: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
