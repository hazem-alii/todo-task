import { RxTrash } from "react-icons/rx";
import { TaskItemProps } from "@/types";
import Modal from "./Modal";
const TaskItem = ({
  task,
  onAction,
  onDelete,
  primaryActionIcon,
  isCompleted = false,
}: TaskItemProps) => {
  return (
    <div className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px]">
      <h3
        className={`${
          isCompleted ? "text-done-color line-through" : "text-border-color"
        } ml-5`}
      >
        {task}
      </h3>
      <div className="flex mr-5 gap-2">
        <span onClick={onAction}>{primaryActionIcon}</span>
        <Modal
          handleDelete={onDelete}
          trigger={<RxTrash className="text-border-color text-2xl" />}
        />
      </div>
    </div>
  );
};

export default TaskItem;
