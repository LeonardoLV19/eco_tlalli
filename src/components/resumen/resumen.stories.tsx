import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardWithMaxWidth from "./Resumen"; // ajusta la ruta si tu archivo tiene otro nombre

const meta: Meta<typeof CardWithMaxWidth> = {
  title: "Components/CardWithMaxWidth",
  component: CardWithMaxWidth,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tarjeta de Material UI con un ancho máximo de 345px.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardWithMaxWidth>;

export const Default: Story = {
  name: "Vista por defecto",
};
