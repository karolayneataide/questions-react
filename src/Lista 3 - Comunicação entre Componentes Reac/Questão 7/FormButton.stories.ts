import type { Meta, StoryObj } from "@storybook/react";

import { FormButton as FormButtonComponent } from "./FormButton";

const meta: Meta<typeof FormButtonComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 7",
  component: FormButtonComponent,
} satisfies Meta<typeof FormButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormButton: Story = {
 
};
