import type { Meta, StoryObj } from "@storybook/react";

import { Counter as CounterComponent } from "./Counter";

const meta: Meta<typeof CounterComponent> = {
  title: "Lista 1 - Components e Props/Questão 8",
  component: CounterComponent,
} satisfies Meta<typeof CounterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Counter: Story = {};
