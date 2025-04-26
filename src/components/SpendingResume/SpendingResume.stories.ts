import type { Meta, StoryObj } from '@storybook/react';
import SpendingResume from './SpendingResume';

const meta: Meta<typeof SpendingResume> = {
  title: 'Components/SpendingResume',
  component: SpendingResume,
};

export default meta;
type Story = StoryObj<typeof SpendingResume>;

export const Default: Story = {};
