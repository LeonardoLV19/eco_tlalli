import type { Meta, StoryObj } from '@storybook/react';
import { CarbonFootprintRadialChart as CarbonFootprintChart } from './CarbonFootprintRadialChart';

const meta: Meta<typeof CarbonFootprintChart> = {
  title: 'Components/CarbonFootprintChart',
  component: CarbonFootprintChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CarbonFootprintChart>;

export const Default: Story = {};
