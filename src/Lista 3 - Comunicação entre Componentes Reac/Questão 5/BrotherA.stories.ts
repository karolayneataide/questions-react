import type { Meta, StoryObj } from "@storybook/react";

import { BrotherA as BrotherAComponent } from "./BrotherA";

const meta: Meta<typeof BrotherAComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 5",
  component: BrotherAComponent,
} satisfies Meta<typeof BrotherAComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrotherA: Story = {};
