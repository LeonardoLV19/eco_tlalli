import type { Meta, StoryObj } from '@storybook/react'
import TabBar from './TabBar'

// Metadatos del componente
const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'], // permite generar documentación automática
  argTypes: {
    role: {
      control: { type: 'select' },
      options: ['cliente', 'vendedor', 'admin']
    }
  }
}

export default meta
type Story = StoryObj<typeof TabBar>

// Historias individuales
export const Cliente: Story = {
  args: {
    role: 'cliente'
  }
}

export const Vendedor: Story = {
  args: {
    role: 'vendedor'
  }
}

export const Admin: Story = {
  args: {
    role: 'admin'
  }
}
