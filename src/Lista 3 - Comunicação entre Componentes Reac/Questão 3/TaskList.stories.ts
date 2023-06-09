import type { Meta, StoryObj } from "@storybook/react";

import { TaskList as TaskListComponent } from "./TaskList";

const meta: Meta<typeof TaskListComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 3",
  component: TaskListComponent,
} satisfies Meta<typeof TaskListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaskList: Story = {
  args: {
    tasks: [
      {
        id: "1",
        name: "Lembrar de estudar",
      },
      {
        id: "1",
        name: "Adicionar Integração do Github",
      },
    ],
  },
};
