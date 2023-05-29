import type { Meta, StoryObj } from "@storybook/react";

import { Toggle as ToggleComponent } from "./Toggle";

const meta: Meta<typeof ToggleComponent> = {
  title: "Lista 1 - Components e Props/Questão 9",
  component: ToggleComponent,
} satisfies Meta<typeof ToggleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toggle: Story = {};
