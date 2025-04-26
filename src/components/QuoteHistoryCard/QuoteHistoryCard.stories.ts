import type { Meta, StoryObj } from '@storybook/react';
import QuoteHistoryCard from './QuoteHistoryCard';

const meta: Meta<typeof QuoteHistoryCard> = {
  title: 'Components/QuoteHistoryCard',
  component: QuoteHistoryCard,
  args: {
    price: '82,272 MXN',
    date: '30 de Marzo de 2025',
    energyCurrent: 100,
    energyWithProduct: 400,
    moneyCurrent: 2000,
    moneyWithProduct: 10000,
  },
};

export default meta;
type Story = StoryObj<typeof QuoteHistoryCard>;

export const Default: Story = {};
