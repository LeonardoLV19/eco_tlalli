import type { Meta, StoryObj } from '@storybook/react'
import { DeliveryCard } from './DeliveryCard'

// Metadatos del componente
const meta: Meta<typeof DeliveryCard> = {
  title: 'Components/DeliveryCard',
  component: DeliveryCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DeliveryCard>

// Historia (story)

export const Default: Story = {
  args: {}
}
