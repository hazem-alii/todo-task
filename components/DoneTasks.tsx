import { DoneTodosProps } from "@/types";
import { GrRevert } from "react-icons/gr";
import { useAppDispatch } from "@/lib/hooks";
import { handleDelete, handleRevert } from "@/lib/todos/todosSlice";
import TaskItem from "./TaskItem";
const DoneTasks = ({ doneTodos }: DoneTodosProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="mt-[56px]">
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Done - {doneTodos.length}
      </h2>
      <div className="flex flex-col gap-3">
        {doneTodos.map((todo, id) => (
          <TaskItem
            key={id}
            task={todo}
            onAction={() => dispatch(handleRevert(id))}
            onDelete={() => dispatch(handleDelete({ id, type: "doneTasks" }))}
            primaryActionIcon={
              <GrRevert className="text-border-color text-2xl" />
            }
            isCompleted={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DoneTasks;
