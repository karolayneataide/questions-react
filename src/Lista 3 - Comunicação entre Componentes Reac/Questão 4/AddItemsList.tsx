import { FormEvent, useState } from "react";
import { TaskList } from "../Questão 3/TaskList";
import { TaskListItems } from "../Questão 3/TaskList.props";

export function AddItemsList() {
  const [task, setTask] = useState<TaskListItems>();

  const [tasks, setTasks] = useState<TaskListItems[]>([]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (task) {
      setTasks([...tasks, task]);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Tarefa"
          value={task?.name}
          onChange={(event) =>
            setTask({
              id: Math.random().toString(36),
              name: event.target.value,
            })
          }
        />
        <button>Adicionar tarefa</button>
      </form>
      <TaskList tasks={tasks} />
    </div>
  );
}
