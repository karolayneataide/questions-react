export type ToDoListItems = {
  id: string;
  title: string;
  status: boolean;
};

export interface ToDoListProps {
  tasks: ToDoListItems[];
}

export interface TodoProps {
  task: ToDoListItems;
}
