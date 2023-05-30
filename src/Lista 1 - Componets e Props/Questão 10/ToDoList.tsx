import { useState } from "react";
import { ToDoListItems, ToDoListProps, TodoProps } from "./ToDoList.props";
import * as S from "./ToDoList.styles";

export function ToDoList({ tasks }: ToDoListProps) {
  return (
    <div>
      <S.List>
        {tasks.map((task: ToDoListItems) => {
          return <ToDo task={task} />;
        })}
      </S.List>
    </div>
  );
}

function ToDo({ task }: TodoProps) {
  const [status, setStatus] = useState(task.status);

  function handleStatus() {
    setStatus(!status);
  }

  return (
    <div key={task.id}>
      <p>{task.title}</p>
      <button onClick={handleStatus}>
        <p>Status: {status === true ? "Concluído" : "Não concluído"}</p>
      </button>
    </div>
  );
}
