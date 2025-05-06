import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import RegistrationOptions from "./RegistrationOptions";

const meta: Meta<typeof RegistrationOptions> = {
  title: "Components/RegistrationOptions",
  component: RegistrationOptions,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra opciones de registro para clientes y vendedores, con un botón adicional para iniciar sesión.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RegistrationOptions>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
