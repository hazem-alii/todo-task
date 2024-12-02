"use client";
import { PlusIcon, Input, Button } from "../Imports";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addTodo, updateEnteredValue } from "@/lib/todos/todosSlice";
const InputField = () => {
  const enteredValue = useAppSelector((state) => state.todos.enteredValue);
  const dispatch = useAppDispatch();
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateEnteredValue(e.target.value));
  }
  return (
    <div className="flex items-center mt-12 ml-14 pt-14">
      <Input
        value={enteredValue}
        onChange={handleTextChange}
        type="text"
        placeholder="Add a new task"
        className="w-[381px] h-[40px] mr-2 rounded-[10px] border-[1px] p-4 placeholder-input-color placeholder:text-[16px] bg-form-bg border-border-color text-white"
      />

      <Button
        className="flex justify-center items-center bg-border-color rounded"
        onClick={() => dispatch(addTodo(enteredValue))}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default InputField;
