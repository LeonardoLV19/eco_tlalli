import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PopUpV3 from "./PopUpV3";

const meta: Meta<typeof PopUpV3> = {
  title: "Components/PopUpV3",
  component: PopUpV3,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente de ventana emergente que solicita confirmación para rechazar una solicitud de vendedor.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopUpV3>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
