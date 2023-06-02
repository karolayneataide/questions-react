import type { Meta, StoryObj } from "@storybook/react";

import { TaskList as TaskListComponent } from "./TaskList";

const meta: Meta<typeof TaskListComponent> = {
  title: "Lista 2 - Renderização Condicional /Questão 3",
  component: TaskListComponent,
} satisfies Meta<typeof TaskListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaskList: Story = {
  args: {
    tasks: [
      { id: "41", name: "karol" },
      { id: "4", name: "karolayne" },
      { id: "1", name: "layne" },
    ],
  },
};
