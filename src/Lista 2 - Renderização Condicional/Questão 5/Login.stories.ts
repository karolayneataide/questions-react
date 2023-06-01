import type { Meta, StoryObj } from "@storybook/react";

import { Profile as ProfileComponent } from "./Profile";

const meta: Meta<typeof ProfileComponent> = {
  title: "Lista 2 - Renderização Condicional /Questão 5",
  component: ProfileComponent,
} satisfies Meta<typeof ProfileComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    users: [
      { name: "Karolayne", age: 27, isAdmin: true },
      { name: "Sidney", age: 27, isAdmin: false },
    ],
  },
};
