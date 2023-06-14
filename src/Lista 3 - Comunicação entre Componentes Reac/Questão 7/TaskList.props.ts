export type TaskListItems = {
  id: string;
  name: string;
};

export interface TaskListProps {
  tasks: TaskListItems[];
}

export interface TaskProps {
  task: TaskListItems;
}
