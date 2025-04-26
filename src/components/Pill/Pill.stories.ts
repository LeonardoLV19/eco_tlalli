import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Pill from "./Pill";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Volver: Story = {
  args: {
    text: "Volver",
    color: "volver",
  },
};

export const Añadir: Story = {
  args: {
    text: "Añadir",
    color: "añadir",
  },
};

export const Personalizada: Story = {
  args: {
    text: "Personalizada",
    color: "personalizada",
  },
};

export const Continuar: Story = {
  args: {
    text: "Continuar",
    color: "continue",
  },
};
