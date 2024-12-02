import { MdDone } from "react-icons/md";
import { TodoItemsProps } from "@/types";
import TaskItem from "./TaskItem";
import { addToDoneTasks, handleDelete } from "@/lib/todos/todosSlice";
import { useDispatch } from "react-redux";
const TodoItems = ({ todos }: TodoItemsProps) => {
  const dispatch = useDispatch();
  return (
    <section className="mt-[56px] mb-12 max-h-[300px] overflow-auto">
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Tasks todo - {todos.length}
      </h2>
      {/* container hold all todos */}
      <div className="flex flex-col gap-4">
        {todos.map((todo, id) => (
          <TaskItem
            key={id}
            task={todo}
            onAction={() => dispatch(addToDoneTasks(id))}
            onDelete={() => dispatch(handleDelete({ id, type: "todos" }))}
            primaryActionIcon={
              <MdDone className="text-border-color text-2xl" />
            }
          />
        ))}
      </div>
    </section>
  );
};

export default TodoItems;
