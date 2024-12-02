// How can i shorthand the two interfaces below without ruining variables naming?
export interface TodoItemsProps {
  todos: string[];
}

export interface DoneTodosProps {
  doneTodos: string[];
}

export interface TodosState {
  todos: string[];
  enteredValue: string;
  doneTodos: string[];
  isClient: boolean;
}

export interface TaskItemProps {
  task: string;
  onAction: () => void;
  onDelete: () => void;
  primaryActionIcon: JSX.Element;
  isCompleted?: boolean;
}
