import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MetricaHuellaDeCarbonoV4 from "./MetricaHuellaDeCarbonoV4";

const meta: Meta<typeof MetricaHuellaDeCarbonoV4> = {
  title: "Components/MetricaHuellaDeCarbonoV4",
  component: MetricaHuellaDeCarbonoV4,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra una métrica avanzada de la huella de carbono con visualizaciones adicionales.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MetricaHuellaDeCarbonoV4>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
