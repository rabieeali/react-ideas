import { useSelector } from "react-redux";
import Task from "./Task";

const TodoItems = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompeleted={todo.isCompeleted}
        />
      ))}
    </div>
  );
};

export default TodoItems;
