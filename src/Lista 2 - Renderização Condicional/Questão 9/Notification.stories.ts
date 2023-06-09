import type { Meta, StoryObj } from "@storybook/react";

import { Notification as NotificationComponent } from "./Notification";

const meta: Meta<typeof NotificationComponent> = {
  title: "Lista 2 - Renderização condicional /Questão 9",
  component: NotificationComponent,
} satisfies Meta<typeof NotificationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notification: Story = {};
