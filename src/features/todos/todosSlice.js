import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: 1, title: "todo #1", isCompeleted: false },
    { id: 2, title: "todo #2", isCompeleted: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        isCompeleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodos: (state, action) => {
      const filtered = state.todos.filter((el) => el.id !== action.payload.id);
      state.todos = filtered;
    },
    isTodoDone: (state, action) => {
      const changedTodo = state.todos.find((t) => t.id === action.payload.id);
     changedTodo.isCompeleted = !changedTodo.isCompeleted;
    },
  },
});

export const { addTodos, deleteTodos, isTodoDone } = todosSlice.actions;

export default todosSlice.reducer;
