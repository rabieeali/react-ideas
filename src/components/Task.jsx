import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, isTodoDone } from "../features/todos/todosSlice";

const Task = ({ title, id, isCompeleted }) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodos({ id }));
  };

  const toggleTodo = (e) => {
    setDone(e.target.checked);
    dispatch(isTodoDone({ id }));
  };

  return (
    <div id={id} className="bg-warning rounded m-auto col-5 p-3 my-2">
      <div className="flex">
        <input
          onChange={(e, id) => toggleTodo(e, id)}
          className="form-check-input px-1"
          type="checkbox"
        />
        <label
          className={`mx-2 fw-bold text-uppercase ${
            done ? "text-decoration-line-through" : ""
          }`}
        >
          {title}
        </label>
      </div>
      <h6>{isCompeleted ? "Done" : "Not Finished!"}</h6>
      <button onClick={() => deleteHandler(id)} className="btn btn-danger">
        delete
      </button>
    </div>
  );
};

export default Task;
