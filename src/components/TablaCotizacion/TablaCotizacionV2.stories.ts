import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TablaCotizacionV2 from "./TablaCotizacionV2";

const meta: Meta<typeof TablaCotizacionV2> = {
  title: "Components/TablaCotizacionV2",
  component: TablaCotizacionV2,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Versión mejorada del componente para mostrar una tabla de cotización con datos dinámicos.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TablaCotizacionV2>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Aquí puedes agregar las props por defecto que necesite el componente
    data: [
      { id: 1, producto: "Producto X", precio: 150, cantidad: 3 },
      { id: 2, producto: "Producto Y", precio: 250, cantidad: 2 },
    ],
    onRowClick: (row: any) => console.log("Fila seleccionada:", row),
    // Agrega más props si el componente las requiere
  },
};
