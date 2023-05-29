import type { Meta, StoryObj } from "@storybook/react";

import { Nav as NavComponent } from "./Nav";

const meta: Meta<typeof NavComponent> = {
  title: "Lista 1 - Components e Props/Questão 6",
  component: NavComponent,
} satisfies Meta<typeof NavComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  args: {
    items: [
      {
        id: "5fdf65",
        label: "Linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
  },
};
