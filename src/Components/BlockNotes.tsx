import { FaNotesMedical } from "react-icons/fa";
import { useEffect, useState } from "react";
import TodoItems from "./TodoItems";

type Priority = "Urgent" | "Normal" | "Basse";

type todo = {
  id: number;
  text: string;
  priority: Priority;
};

export default function BlockNotes() {
  // STATES:
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<Priority>("Normal");
  const [filter, setFilter] = useState<Priority | "Tous">("Tous");

  //MANIPULATION:
  const saveTodo = localStorage.getItem("todos");
  const initialTodo = saveTodo ? JSON.parse(saveTodo) : [];
  const [todos, setTodos] = useState<todo[]>(initialTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    if (input.trim() == "") {
      return;
    }
    const newTodo: todo = {
      id: Date.now(),
      text: input.trim(),
      priority: priority,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setInput("");
    setPriority("Normal");
    console.log(newTodos);
  };

  let filtredTodos: todo[] = [];
  if (filter === "Tous") {
    filtredTodos = todos;
  } else {
    filtredTodos = todos.filter((todo) => todo.priority == filter);
  }
  const urgentcount = todos.filter((t) => t.priority === "Urgent").length;
  const Normalcount = todos.filter((t) => t.priority === "Normal").length;
  const Bassecount = todos.filter((t) => t.priority === "Basse").length;
  const TouCount = todos.length;

  const deletTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="h-138 mt-5 border flex justify-center ">
      <div className="border border-base-100 w-fit backdrop-filter-[blur(18px)] h-full rounded-xl w-2/3">
        <div className="flex gap-1 justify-center mt-3 ">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Put your note here..."
            className="input w-100 input-base-300 rounded-l-xl outline-none"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="select w-30 justify-center outline-none"
          >
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Basse">Basse</option>
          </select>
          <button onClick={add} className="btn  rounded-r-xl">
            Add
          </button>
        </div>
        <div className="flex flex-1 space-y-2 h-fit">
          <div className="flex mt-2 ml-5 mr-5 items-center justify-between w-full">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("Tous")}
                className={`btn btn-sm btn-soft hover:btn-primary ${filter === "Tous" ? "btn-primary" : ""}`}
              >
                Tous ({TouCount})
              </button>
              <button
                onClick={() => setFilter("Urgent")}
                className={`btn btn-sm btn-soft hover:btn-error ${filter === "Urgent" ? "btn-error" : ""}`}
              >
                Urgent ({urgentcount})
              </button>
              <button
                onClick={() => setFilter("Normal")}
                className={`btn btn-sm btn-soft hover:btn-warning ${filter === "Normal" ? "btn-warning" : ""}`}
              >
                Normal ({Normalcount})
              </button>
              <button
                onClick={() => setFilter("Basse")}
                className={`btn btn-sm btn-soft hover:btn-success ${filter === "Basse" ? "btn-success" : ""}`}
              >
                Basse ({Bassecount})
              </button>
            </div>
            <div className="justify-end">
              <button className="btn btn-sm btn-info">Tout finir</button>
            </div>
          </div>
        </div>
        <div className={`mt-4 hide`}>
          {filtredTodos.length > 0 ? (
            <ul className="divide-y-3 divide-primary/50">
              {filtredTodos.map((todo) => (
                <li key={todo.id}>
                  <TodoItems todo={todo} onDelet={() => deletTodo(todo.id)} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="">
              <div className="flex justify-center mt-15">
                <FaNotesMedical className="text-base-100 w-50 h-50" />
              </div>
              <div className="flex justify-center mt-5">
                <p className="text-base-100 ">
                  By faling to plan, you are preparing to fail
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
