import type { Meta, StoryObj } from "@storybook/react";

import { Timer as TimerComponent } from "./Timer";

const meta: Meta<typeof TimerComponent> = {
  title: "Lista 2 - Renderização condicional /Questão 7",
  component: TimerComponent,
} satisfies Meta<typeof TimerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Timer: Story = {};
