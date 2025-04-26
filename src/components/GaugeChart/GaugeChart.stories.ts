import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CompositionExample from './GaugeChart';

const meta: Meta<typeof CompositionExample> = {
  title: 'Components/CompositionExample',
  component: CompositionExample,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      defaultValue: 72,
      defaultValue2: 'Alta',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CompositionExample>;

export const Default: Story = {
  args: {
    value: 72,
    value2: 'Alta',
  },
};

export const HighValue: Story = {
  args: {
    value: 95,
    value2: 'Muy Alta',
  },
};

export const LowValue: Story = {
  args: {
    value: 25,
    value2: 'Baja',
  },
};
