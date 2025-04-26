import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ConsumoPorEstado from "./ConsumoPorEstado";

const meta: Meta<typeof ConsumoPorEstado> = {
  title: "Components/ConsumoPorEstado",
  component: ConsumoPorEstado,
  tags: ["autodocs"], // ✅ importante para habilitar generación automática de Docs
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra un gráfico de pastel para representar el consumo por estado.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConsumoPorEstado>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
