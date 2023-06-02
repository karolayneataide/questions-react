import type { Meta, StoryObj } from "@storybook/react";

import { Modal as ModalComponent } from "./Modal";

const meta: Meta<typeof ModalComponent> = {
  title: "Lista 2 - Renderização Condicional /Questão 6",
  component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {};
