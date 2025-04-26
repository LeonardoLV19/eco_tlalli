import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MetricaHuellaDeCarbonoV1 from "./MetricaHuellaDeCarbono";

const meta: Meta<typeof MetricaHuellaDeCarbonoV1> = {
  title: "Components/MetricaHuellaDeCarbonoV1",
  component: MetricaHuellaDeCarbonoV1,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra una métrica visual de la huella de carbono con un gráfico semicircular y datos relevantes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MetricaHuellaDeCarbonoV1>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
