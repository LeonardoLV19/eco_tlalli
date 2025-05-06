import type { Meta, StoryObj } from '@storybook/react'
import { ShoppingHistory } from './ShoppingHistory'

// Metadatos del componente
const meta: Meta<typeof ShoppingHistory> = {
  title: 'Components/ShoppingHistory',
  component: ShoppingHistory,
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'text' },
    title: { control: 'text' },
    date: { control: 'text' },
    imageUrl: { control: 'text' },
    width: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof ShoppingHistory>

// Historia (story)

export const Default: Story = {
  args: {
    price: '299',
    title: 'Audífonos inalámbricos',
    date: '25 de abril de 2025',
    imageUrl: '/paneles.png',
    width: '400px'
  }
}
