import type { Meta, StoryObj } from '@storybook/react'
import { SpendingByCategory } from './SpendingByCat'

// Metadatos del componente
const meta: Meta<typeof SpendingByCategory> = {
  title: 'Components/SpendingByCategory',
  component: SpendingByCategory,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpendingByCategory>

// Historia (story)

export const Default: Story = {
  args: {}
}
