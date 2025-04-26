import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TablaCotizacionV1 from "./TablaCotizacionV1";

const meta: Meta<typeof TablaCotizacionV1> = {
  title: "Components/TablaCotizacionV1",
  component: TablaCotizacionV1,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente para mostrar una tabla de cotización con datos dinámicos.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TablaCotizacionV1>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Aquí puedes agregar las props por defecto que necesite el componente
    data: [
      { id: 1, producto: "Producto A", precio: 100, cantidad: 2 },
      { id: 2, producto: "Producto B", precio: 200, cantidad: 1 },
    ],
    onRowClick: (row: any) => console.log("Fila seleccionada:", row),
  },
};
