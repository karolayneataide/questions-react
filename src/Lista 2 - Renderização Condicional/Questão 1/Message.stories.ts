import type { Meta, StoryObj } from "@storybook/react";

import { Message as MessageComponent } from "./Message";

const meta: Meta<typeof MessageComponent> = {
  title: "Lista 2 - Renderização Condicional /Questão 1",
  component: MessageComponent,
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {
  args: {
    show: true,
  },
};
