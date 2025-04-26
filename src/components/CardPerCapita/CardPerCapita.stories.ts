import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardPerCapita from './CardPerCapita';

const meta: Meta<typeof CardPerCapita> = {
  title: 'Components/CardPerCapita',
  component: CardPerCapita,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CardPerCapita>;

export const Default: Story = {
  args: {
    title: 'TcO al año per cápita en el mundo',
    subtitle: '4.83 toneladas al año por habitante',
    image: 'mexico.png',
  },
};

export const WithDifferentImage: Story = {
  args: {
    title: 'TcO al año per cápita en América',
    subtitle: '7.48 toneladas al año por habitante',
    image: 'mundo.png',
  },
};
