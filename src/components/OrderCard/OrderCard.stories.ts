import type { Meta, StoryObj } from '@storybook/react'
import { OrderCard } from './OrderCard'

// Metadatos del componente
const meta: Meta<typeof OrderCard> = {
  title: 'Components/OrderCard',
  component: OrderCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OrderCard>

// Historia (story)

export const Default: Story = {
  args: {}
}
