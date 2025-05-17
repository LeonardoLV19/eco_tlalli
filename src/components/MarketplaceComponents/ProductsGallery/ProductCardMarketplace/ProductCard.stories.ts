import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCardMarketplace";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard/Standard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Standard: Story = {
  args: {},
};
