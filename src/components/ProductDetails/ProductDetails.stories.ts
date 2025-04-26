import type { Meta, StoryObj } from '@storybook/react';
import ProductDetails from './ProductDetails';

const meta: Meta<typeof ProductDetails> = {
  title: 'Components/ProductDetails',
  component: ProductDetails,
};

export default meta;
type Story = StoryObj<typeof ProductDetails>;

export const Default: Story = {};
