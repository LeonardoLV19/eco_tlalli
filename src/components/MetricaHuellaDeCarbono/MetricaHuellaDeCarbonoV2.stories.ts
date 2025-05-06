import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MetricaHuellaDeCarbonoV2 from "./MetricaHuellaDeCarbonoV2";

const meta: Meta<typeof MetricaHuellaDeCarbonoV2> = {
  title: "Components/MetricaHuellaDeCarbonoV2",
  component: MetricaHuellaDeCarbonoV2,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra un gráfico de barras radiales para representar las emisiones de dióxido de carbono por categoría.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MetricaHuellaDeCarbonoV2>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
