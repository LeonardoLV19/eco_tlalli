import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import EnergyLineChartCard from "./Gasto"; // ajusta la ruta según donde tengas el componente

const meta: Meta<typeof EnergyLineChartCard> = {
  title: "Components/EnergyLineChartCard",
  component: EnergyLineChartCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tarjeta con gráfico de líneas para mostrar el gasto energético en distintos meses.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EnergyLineChartCard>;

export const Default: Story = {
  name: "Vista por defecto",
};
