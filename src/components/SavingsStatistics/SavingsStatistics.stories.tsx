import type { Meta, StoryObj } from '@storybook/react';
import { Component as SavingsStatistics } from './SavingsStatistics';

const meta: Meta<typeof SavingsStatistics> = {
  title: 'Components/SavingsStatistics',
  component: SavingsStatistics,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SavingsStatistics>;

export const Default: Story = {};
