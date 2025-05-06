import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TarjetaVentasVistaVendedor from "./TarjetaVentasVistaVendedor";

const meta: Meta<typeof TarjetaVentasVistaVendedor> = {
  title: "Components/TarjetaVentasVistaVendedor",
  component: TarjetaVentasVistaVendedor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra una tarjeta con las ventas totales y un menú desplegable.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TarjetaVentasVistaVendedor>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
