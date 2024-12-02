"use client";
import { InputField, TodoItems, DoneTasks } from "../Imports";
import { handleHydration } from "@/lib/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function Home() {
  const isClient = useAppSelector((state) => state.todos.isClient);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const doneTasks = useAppSelector((state) => state.todos.doneTodos);
  // Hydration - set client to true
  useEffect(() => {
    dispatch(handleHydration());
  }, []);

  // Data Persistance
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("todos", JSON.stringify(todos));
      localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    }
  }, [todos, doneTasks, isClient]);

  if (!isClient) return null;
  return (
    <div className="flex justify-center items-center h-screen overflow-auto">
      <div className="w-[583px] min-h-[85%] bg-form-bg rounded-3xl p-4">
        <InputField />
        <TodoItems todos={todos} />
        <DoneTasks doneTodos={doneTasks} />
      </div>
    </div>
  );
}
