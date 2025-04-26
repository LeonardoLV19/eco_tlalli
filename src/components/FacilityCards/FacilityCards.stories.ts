import type { Meta, StoryObj } from '@storybook/react';
import InstallationDetails from './FacilityCards';

const meta: Meta<typeof InstallationDetails> = {
  title: 'Components/InstallationDetails',
  component: InstallationDetails,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof InstallationDetails>;

export const Default: Story = {};
