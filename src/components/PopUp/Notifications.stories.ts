import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Notifications from "./Notifications";

const meta: Meta<typeof Notifications> = {
  title: "Components/Notifications",
  component: Notifications,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente que muestra una lista de notificaciones con detalles de ventas completadas.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notifications>;

export const Default: Story = {
  name: "Vista por defecto",
  args: {
    // Este componente no recibe props, pero si en el futuro se agregan, puedes configurarlas aquí.
  },
};
