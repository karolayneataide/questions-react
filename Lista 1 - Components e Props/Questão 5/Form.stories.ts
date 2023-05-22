import type { Meta, StoryObj } from "@storybook/react";

import { Form as FormComponent } from "./Form";

const meta: Meta<typeof FormComponent> = {
  title: "Lista 1 - Components e Props/Questão 5",
  component: FormComponent,
} satisfies Meta<typeof FormComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {},
};
