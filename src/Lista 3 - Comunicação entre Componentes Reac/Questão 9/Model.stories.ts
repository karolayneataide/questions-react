import type { Meta, StoryObj } from "@storybook/react";

import { Model as ModelMovingComponent } from "./Model";

const meta: Meta<typeof ModelMovingComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 9",
  component: ModelMovingComponent,
} satisfies Meta<typeof ModelMovingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Model: Story = {

};
