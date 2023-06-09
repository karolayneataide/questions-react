import type { Meta, StoryObj } from "@storybook/react";

import { SonToFather as SonToFatherComponent } from "./SonToFather";

const meta: Meta<typeof SonToFatherComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 2",
  component: SonToFatherComponent,
} satisfies Meta<typeof SonToFatherComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SonToFather: Story = {};
