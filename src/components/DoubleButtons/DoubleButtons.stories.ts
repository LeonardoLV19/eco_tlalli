import type { Meta, StoryObj } from '@storybook/react'
import { DoubleButtons } from './DoubleButtons'

// Metadatos del componente
const meta: Meta<typeof DoubleButtons> = {
  title: 'Components/DoubleButtons',
  component: DoubleButtons,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DoubleButtons>

// Historia (story)

export const Default: Story = {
  args: {}
}
