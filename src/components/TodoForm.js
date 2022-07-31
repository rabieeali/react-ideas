import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../features/todos/todosSlice";

const TodoForm = () => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos({ title: input }));
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="card p-3 col-5 m-auto mt-3">
      <label className="form-label" htmlFor="todo">
        Enter To Dos!
      </label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control"
        id="todo"
        type="text"
      />

      <button className="btn btn-primary mt-3" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
