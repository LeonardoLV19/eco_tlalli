// src/components/SalesTable/SalesTable.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import SalesTable from "./SalesTable";
import "@/app/globals.css"; // Ajusta la ruta si tus estilos globales están en otro lugar

const meta: Meta<typeof SalesTable> = {
  title: "Components/SalesTable",
  component: SalesTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#ffffff" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SalesTable>;

export const Default: Story = {
  args: {},
};
