import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import EnergyChartCard from "./Consumo"

const meta: Meta<typeof EnergyChartCard> = {
  title: "Components/EnergyChartCard",
  component: EnergyChartCard,
  tags: ["autodocs"], // ✅ importante para habilitar generación automática de Docs
  parameters: {
    docs: {
      description: {
        component: "Tarjeta con gráfico de barras para mostrar consumo energético.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof EnergyChartCard>

export const Default: Story = {
  name: "Vista por defecto",
}
