import type { Meta, StoryObj } from "@storybook/react";

import { Login as LoginComponent } from "./Login";

const meta: Meta<typeof LoginComponent> = {
  title: "Lista 2 - Renderização condicional /Questão 2",
  component: LoginComponent,
} satisfies Meta<typeof LoginComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};
