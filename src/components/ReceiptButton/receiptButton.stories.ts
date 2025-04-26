import type { Meta, StoryObj } from '@storybook/react';
import { ReceiptButton } from './receiptButton';

const meta: Meta<typeof ReceiptButton> = {
  title: 'Components/ReceiptButton',
  component: ReceiptButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ReceiptButton>;

export const Default: Story = {};
