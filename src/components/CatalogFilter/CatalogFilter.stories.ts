import type { Meta, StoryObj } from '@storybook/react';
import SimpleBottomNavigation from './CatalogFilter';

const meta: Meta<typeof SimpleBottomNavigation> = {
  title: 'Components/CatalogFilter',
  component: SimpleBottomNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleBottomNavigation>;

export const Default: Story = {};
