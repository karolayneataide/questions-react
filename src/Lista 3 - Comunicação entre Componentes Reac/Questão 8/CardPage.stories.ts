import type { Meta, StoryObj } from "@storybook/react";

import { CardPage as CardPageComponent } from "./CardPage";

const meta: Meta<typeof CardPageComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 8",
  component: CardPageComponent,
} satisfies Meta<typeof CardPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardPage: Story = {
 args: {
  contents: [{
  id:'we1',
  title: 'Hello',
  text: 'I´m here to say hello!'
  }, {
    id:'we2',
    title: 'Have a nice day!',
    text: 'I´m happy for you! So, have a nice day!'
  }, {
    id: 'we3',
    title: 'Smile today',
    text: 'This will make better your day!'
  }]
 }
};
