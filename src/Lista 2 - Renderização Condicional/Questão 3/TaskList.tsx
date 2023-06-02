import { TaskListItems, TaskListProps, TaskProps } from "./TaskList.props";
import * as S from "./TaskList.styles";

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <S.Title>Lista de Tarefas</S.Title>
      {!tasks ? (
        <S.Typography>Nenhuma tarefa encontrada</S.Typography>
      ) : (
        <S.List>
          {tasks.map((task: TaskListItems) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </S.List>
      )}
    </div>
  );
}

function TaskItem({ task }: TaskProps) {
  return (
    <div>
      <S.Typography>{task.name}</S.Typography>
    </div>
  );
}
