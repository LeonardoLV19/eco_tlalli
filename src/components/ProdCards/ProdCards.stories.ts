import type { Meta, StoryObj } from '@storybook/react';
import ProdCards from './ProdCards';

const meta: Meta<typeof ProdCards> = {
  title: 'Components/ProdCards',
  component: ProdCards,
  args: {
    variant: 'buyer', // solo type, sin product
  },
};

export default meta;
type Story = StoryObj<typeof ProdCards>;

export const Buyer: Story = {
  args: {
    variant: 'buyer',
  },
};

export const AddNewProduct: Story = {
  args: {
    variant: 'add',
  },
};

export const SellerView: Story = {
  args: {
    variant: 'seller',
  },
};
