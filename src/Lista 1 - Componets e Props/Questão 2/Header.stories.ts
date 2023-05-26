import type { Meta, StoryObj } from "@storybook/react";

import { Header as HeaderComponent } from "./Header";

const meta: Meta<typeof HeaderComponent> = {
  title: "Lista 1 - Components e Props/Questão 2",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    children: "RuleTech",
  },
};
