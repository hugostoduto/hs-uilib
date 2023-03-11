import React from 'react';
import { Header } from '../components/Header/Header'

export default {
  title: 'Header',
  component: Header,
  args: {
    logo: 'Header',
    items: [{ item: "Home", link: "link/item1" }, { item: "About", link: "link/item2" }, { item: "Contact", link: "link/item2" }],
    newPage: false,
    logoImg: false
  },

  argTypes: {
    logo: { type: 'string' },
    items: { type: 'array' },
    newPage: { type: "boolean" },
    logoImg: { type: "boolean" },

  },
};

export const LogoTexto = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
export const LogoImagem = (args) => {
  return (
    <div>
      <Header items={[{ item: "Home", links: "link/item1" }, { item: "About", links: "link/item2" }, { item: "Contact", links: "link/item2" }]} logoImg={true} logo="https://static.wixstatic.com/media/afe1f6_f76b59c06a7745678617eb165a0b06e7~mv2.png" />
    </div>
  );
};
