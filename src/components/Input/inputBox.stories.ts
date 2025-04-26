import type { Meta, StoryObj } from '@storybook/react';
import InputBox from './inputBox';

const meta: Meta<typeof InputBox> = {
  title: 'Components/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelText: { control: 'text', name: 'Texto del Label' },
    placeholder: { control: 'text', name: 'Placeholder' },
  },
};

export default meta;

type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    labelText: 'Nombre en la tarjeta',
    placeholder: 'Escribe aquí',
  },
};

export const WithoutIcon: Story = {
  args: {
    labelText: 'Nombre del producto',
    placeholder: 'Escribe aquí',
    icon: null,
  },
};
