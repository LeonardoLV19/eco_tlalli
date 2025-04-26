import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PopUpV1 from "./PopUpV1";

const meta: Meta<typeof PopUpV1> = {
  title: "Components/PopUpV1",
  component: PopUpV1,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente de ventana emergente que solicita confirmación para eliminar un producto del catálogo.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopUpV1>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
