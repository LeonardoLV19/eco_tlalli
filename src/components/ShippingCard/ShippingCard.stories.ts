import type { Meta, StoryObj } from "@storybook/react";
import { ShippingCard } from "./ShippingCard";

const meta = {
  title: "Components/ShippingCard",
  component: ShippingCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ShippingCard>;
export default meta;
type Story = StoryObj<typeof ShippingCard>;
export const Default: Story = {
  args: {},
};