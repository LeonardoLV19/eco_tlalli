import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MetricaHuellaDeCarbonoV3 from "./MetricaHuellaDeCarbonoV3";

const meta: Meta<typeof MetricaHuellaDeCarbonoV3> = {
  title: "Components/MetricaHuellaDeCarbonoV3",
  component: MetricaHuellaDeCarbonoV3,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra la métrica de huella de carbono per cápita en México con un mapa ilustrativo.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MetricaHuellaDeCarbonoV3>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
