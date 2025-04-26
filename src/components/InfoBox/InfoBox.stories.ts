import type { Meta, StoryObj } from '@storybook/react';
import { InfoBox } from './InfoBox';

const meta = {
  title: 'Components/InfoBox',
  component: InfoBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['sellers', 'store', 'requests', 'logs'],
      },
      description: 'Tipo de tarjeta informativa',
    },
  },
  args: {
    variant: 'store', // Valor por defecto para todas las stories
  },
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica que usa el valor por defecto (store)
export const Default: Story = {};

// Story para vendedores
export const Vendedores: Story = {
  args: {
    variant: 'sellers',
  },
};

// Story para ventas
export const Ventas: Story = {
  args: {
    variant: 'store',
  },
};

// Story para solicitudes
export const Solicitudes: Story = {
  args: {
    variant: 'requests',
  },
};

// Story para órdenes
export const Ordenes: Story = {
  args: {
    variant: 'logs',
  },
};
