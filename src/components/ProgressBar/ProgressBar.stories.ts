import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    steps: ['Consumo energético', 'Uso de transporte', 'Hábitos de consumo'],
    currentStep: 1,
  },
  argTypes: {
    currentStep: {
      control: { type: 'range', min: 0, max: 2, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
