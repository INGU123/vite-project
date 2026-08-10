import { BiTrash } from "react-icons/bi";

type Priority = "Urgent" | "Normal" | "Basse";

type todo = {
  id: number;
  text: string;
  priority: Priority;
};

type Props = {
  todo: todo;
  onDelet: () => void;
};

const TodoItems = ({ todo, onDelet }: Props) => {
  return (
    <div className="flex justify-between ml-3">
      <div>
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
        />
        <span className="text-base-300 text-md font-bold ml-2">
          {todo.text}
        </span>
        <span
          className={`badge badge-soft ml-5 
      ${
        todo.priority === "Urgent"
          ? "badge-error"
          : todo.priority === "Normal"
            ? "badge-warning"
            : "badge-success"
      }`}
        >
          {todo.priority}
        </span>
      </div>
      <div>
        <button
          onClick={onDelet}
          className="btn btn-sm btn-error btn-soft mr-3"
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
