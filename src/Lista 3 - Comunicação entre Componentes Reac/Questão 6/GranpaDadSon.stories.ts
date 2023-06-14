import type { Meta, StoryObj } from "@storybook/react";

import { GranpaDadSon as GranpaDadSonComponent } from "./GranpaDadSon";

const meta: Meta<typeof GranpaDadSonComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 6",
  component: GranpaDadSonComponent,
} satisfies Meta<typeof GranpaDadSonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GranpaDadSon: Story = {
  args:{
    message: 'Welcome!'
  }
};
