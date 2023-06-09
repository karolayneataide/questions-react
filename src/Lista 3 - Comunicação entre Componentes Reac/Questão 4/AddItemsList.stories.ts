import type { Meta, StoryObj } from "@storybook/react";

import { AddItemsList as AddItemsListComponent } from "./AddItemsList";

const meta: Meta<typeof AddItemsListComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 4",
  component: AddItemsListComponent,
} satisfies Meta<typeof AddItemsListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddItemsList: Story = {};
