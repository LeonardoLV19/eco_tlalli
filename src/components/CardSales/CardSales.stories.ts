import type { Meta, StoryObj } from '@storybook/react';
import { CardSales } from './CardSales';

const meta = {
  title: 'Components/CardSales',
  component: CardSales,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardSales>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};