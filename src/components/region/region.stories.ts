import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ActionAreaCard from "./Region"; // ajusta la ruta si está en otra carpeta

const meta: Meta<typeof ActionAreaCard> = {
  title: "Components/ActionAreaCard",
  component: ActionAreaCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tarjeta con área interactiva que muestra una imagen centrada con título. Ideal para visualizaciones como mapas o gráficos.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionAreaCard>;

export const Default: Story = {
  name: "Vista por defecto",
};
