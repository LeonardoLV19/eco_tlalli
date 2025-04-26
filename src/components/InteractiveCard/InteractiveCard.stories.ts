import type { Meta, StoryObj } from '@storybook/react';
import InteractiveCard from './InteractiveCard';

const meta: Meta<typeof InteractiveCard> = {
  title: 'Components/InteractiveCard',
  component: InteractiveCard,
};

export default meta;
type Story = StoryObj<typeof InteractiveCard>;

export const Default: Story = {};
