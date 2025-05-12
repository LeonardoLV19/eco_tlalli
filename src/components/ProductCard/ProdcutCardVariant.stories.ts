import type { Meta, StoryObj } from "@storybook/react";
import { ProductCardVariant } from "./ProductCard";

const meta: Meta<typeof ProductCardVariant> = {
  title: "Components/ProductCard/Compact",
  component: ProductCardVariant,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProductCardVariant>;

export const Compact: Story = {
    args: {},
};
