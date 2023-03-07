import React from 'react';
import { Card } from '../components/Cards/Card';

export default {
  title: 'Card',
  component: Card,
  args: {
    image: "https://images.unsplash.com/photo-1677758189069-3a47f0e30ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "test",
    title: "Vista das Montanhas",
    description: "Meteora, Kalabaka, Greece Publicada há 5 dias Canon, EOS 200D Uso gratuito sob a Licença da Unsplash"
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
