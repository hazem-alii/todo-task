import { TodosState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodosState = {
  todos: [],
  enteredValue: "",
  doneTodos: [],
  isClient: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload.trim()) {
        state.todos.push(action.payload);
      }
      state.enteredValue = "";
    },
    updateEnteredValue: (state, action: PayloadAction<string>) => {
      state.enteredValue = action.payload;
    },
    addToDoneTasks: (state, action: PayloadAction<number>) => {
      // here we need to filter [todos] state from the done task, and set the donetasks to the latest value
      const doneTask = state.todos[action.payload];
      if (doneTask) {
        state.todos = state.todos.filter(
          (_, index) => index !== action.payload
        );
        state.doneTodos.push(doneTask);
      }
    },
    handleRevert: (state, action: PayloadAction<number>) => {
      const revertedTask = state.doneTodos[action.payload];
      if (revertedTask) {
        state.doneTodos = state.doneTodos.filter(
          (_, index) => index !== action.payload
        );
        state.todos.push(revertedTask);
      }
    },
    handleDelete: (
      state,
      action: PayloadAction<{ id: number; type: "todos" | "doneTasks" }>
    ) => {
      const { id, type } = action.payload;
      if (type === "todos") {
        state.todos = state.todos.filter((_, index) => index !== id);
      } else if (type === "doneTasks") {
        state.doneTodos = state.doneTodos.filter((_, index) => index !== id);
      }
    },

    handleHydration: (state) => {
      const savedTodos = localStorage.getItem("todos");
      const savedDoneTodos = localStorage.getItem("doneTasks");
      state.todos = savedTodos ? JSON.parse(savedTodos) : [];
      state.doneTodos = savedDoneTodos ? JSON.parse(savedDoneTodos) : [];
      state.isClient = true;
    },
  },
});

export const {
  addTodo,
  updateEnteredValue,
  addToDoneTasks,
  handleRevert,
  handleDelete,

  handleHydration,
} = todosSlice.actions;
export default todosSlice.reducer;
