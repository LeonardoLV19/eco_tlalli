import type { Meta, StoryObj } from '@storybook/react';
import { AdministratorTables } from './AdministratorTables';

const meta: Meta<typeof AdministratorTables> = {
  title: 'Components/AdministratorTables',
  component: AdministratorTables,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['companyApplications', 'productSales', 'vendorValidation'],
      description: 'Selecciona la variante de tabla a mostrar',
      defaultValue: 'companyApplications',
    },
  },
} as Meta<typeof AdministratorTables>;

export default meta;
type Story = StoryObj<typeof AdministratorTables>;

export const CompanyApplications: Story = {
  args: {
    variant: 'companyApplications',
  },
};

export const ProductSales: Story = {
  args: {
    variant: 'productSales',
  },
};

export const VendorValidation: Story = {
  args: {
    variant: 'vendorValidation',
  },
};
