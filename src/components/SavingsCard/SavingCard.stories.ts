import type { Meta, StoryObj } from "@storybook/react";
import { SavingsDistribution } from './SavingsCard';  // Verifica que la ruta sea correcta

const meta = {
  title: 'Components/SavingsCard',
  component: SavingsDistribution,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SavingsDistribution>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};   
