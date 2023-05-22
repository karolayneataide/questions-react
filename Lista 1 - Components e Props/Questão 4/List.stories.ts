import type { Meta, StoryObj } from "@storybook/react";

import { List as ListComponent } from "./List";

const meta: Meta<typeof ListComponent> = {
  title: "Lista 1 - Components e Props/Questão 4",
  component: ListComponent,
} satisfies Meta<typeof ListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    children: "Intermediate",
    props: ["array", "bite", "car"],
  },
};
