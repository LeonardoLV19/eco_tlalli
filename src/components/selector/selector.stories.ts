import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PaginationCard from "./selector"; // ajusta la ruta si el archivo tiene otro nombre o está en otra carpeta

const meta: Meta<typeof PaginationCard> = {
  title: "Components/PaginationCard",
  component: PaginationCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente de paginación con botones de navegación y tres secciones: Vendedores, Solicitudes de productos y Solicitudes de vendedores.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationCard>;

export const Default: Story = {
  name: "Vista por defecto",
};
