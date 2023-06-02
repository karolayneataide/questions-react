import type { Meta, StoryObj } from "@storybook/react";

import { Authorization as AuthorizationComponent } from "./Authorization";

const meta: Meta<typeof AuthorizationComponent> = {
  title: "Lista 2 - Renderização condicional /Questão 8",
  component: AuthorizationComponent,
} satisfies Meta<typeof AuthorizationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Authorization: Story = {};
