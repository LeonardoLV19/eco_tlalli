import type { Meta, StoryObj } from '@storybook/react';
import AdministratorTables from './AdministratorTables';

const meta: Meta<typeof AdministratorTables> = {
  title: 'Components/AdministratorTables',
  component: AdministratorTables,
};

export default meta;
type Story = StoryObj<typeof AdministratorTables>;

export const BasicTable: Story = {
  args: {
    variant: 'basic', // Dependiendo de cómo estén organizadas dentro del componente
  },
};

export const ActionsTable: Story = {
  args: {
    variant: 'actions',
  },
};

export const DownloadTable: Story = {
  args: {
    variant: 'download',
  },
};
