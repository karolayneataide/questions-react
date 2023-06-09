import type { Meta, StoryObj } from "@storybook/react";

import { FormValidation as FormValidationComponent } from "./FormValidation";

const meta: Meta<typeof FormValidationComponent> = {
  title: "Lista 2 - Renderização condicional /Questão 10",
  component: FormValidationComponent,
} satisfies Meta<typeof FormValidationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormValidation: Story = {};
