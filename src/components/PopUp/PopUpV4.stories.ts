import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PopUpV4 from "./PopUpV4";

const meta: Meta<typeof PopUpV4> = {
  title: "Components/PopUpV4",
  component: PopUpV4,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente de ventana emergente que solicita confirmación para rechazar un producto de un vendedor.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopUpV4>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
