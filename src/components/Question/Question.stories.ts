import type { Meta, StoryObj } from "@storybook/react";
import Question from "./Question";

const meta: Meta<typeof Question> = {
  title: "Components/Question",
  component: Question,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Question>;

export const SingleChoice: Story = {
  args: {
    question: "¿Cuál es tu fuente de energía principal?",
    type: "single",
    options: [
      { label: "Gas", carbonValue: 30 },
      { label: "Electricidad", carbonValue: 20 },
      { label: "Energía solar", carbonValue: 5 },
    ],
  },
};

export const MultipleChoice: Story = {
  args: {
    question: "¿Qué medios de transporte usas?",
    type: "multiple",
    options: [
      { label: "Automóvil", carbonValue: 50 },
      { label: "Bicicleta", carbonValue: 0 },
      { label: "Transporte público", carbonValue: 20 },
    ],
  },
};
