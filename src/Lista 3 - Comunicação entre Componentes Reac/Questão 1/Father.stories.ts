import type { Meta, StoryObj } from "@storybook/react";

import { FatherSon as FatherSonComponent } from "./FatherSon";

const meta: Meta<typeof FatherSonComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 1",
  component: FatherSonComponent,
} satisfies Meta<typeof FatherSonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FatherSon: Story = {};
