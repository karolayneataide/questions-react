import type { Meta, StoryObj } from "@storybook/react";

import { Card as CardComponent } from "./Card";

const meta: Meta<typeof CardComponent> = {
  title: "Lista 1 - Components e Props/Questão 3",
  component: CardComponent,
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    title: "English file",
    children: "Intermediate",
  },
};
