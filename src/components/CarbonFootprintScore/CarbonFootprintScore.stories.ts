import type { Meta, StoryObj } from '@storybook/react';
import { Component as CarbonFootprintScore } from './CarbonFootprintScore';

const meta: Meta<typeof CarbonFootprintScore> = {
  title: 'Components/CarbonFootprintScore',
  component: CarbonFootprintScore,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CarbonFootprintScore>;

export const Default: Story = {};
