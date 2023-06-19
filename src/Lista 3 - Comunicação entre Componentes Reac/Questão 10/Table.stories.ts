import type { Meta, StoryObj } from "@storybook/react";

import { Table as TableComponent } from "./Table";

const meta: Meta<typeof TableComponent> = {
  title: "Lista 3 - Comunicação entre Componentes /Questão 10",
  component: TableComponent,
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    users: [
      {
        id: "1",
        name: "Karol",
        age: 27,
        situation: "Aprovada",
      },
      {
        id: "2",
        name: "Kamyla",
        age: 25,
        situation: "Aprovada",
      },
      {
        id: "3",
        name: "Sidney",
        age: 27,
        situation: "Reprovado",
      },
      {
        id: "4",
        name: "Davi",
        age: 0.6,
        situation: "Reprovado",
      },
      {
        id: "5",
        name: "Laís",
        age: 31,
        situation: "Aprovada",
      },
      {
        id: "6",
        name: "Josi",
        age: 45,
        situation: "Aprovada",
      },
    ],
    collums: ["ID", "Nome", "Idade", "Situação"],
  },
};
