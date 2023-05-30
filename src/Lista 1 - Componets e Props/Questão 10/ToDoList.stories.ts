import type { Meta, StoryObj } from "@storybook/react";

import { ToDoList as ToDoListComponent } from "./ToDoList";

const meta: Meta<typeof ToDoListComponent> = {
  title: "Lista 1 - Components e Props/Questão 10",
  component: ToDoListComponent,
} satisfies Meta<typeof ToDoListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToDoList: Story = {
  args: {
    tasks: [
      { id: "1", title: "Lembrar de terminar a lista 1", status: true },
      { id: "1", title: "Lembrar de fazer caminhada", status: false },
    ],
  },
};
