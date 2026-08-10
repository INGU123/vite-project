import { BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FaNotesMedical } from "react-icons/fa";

const Test2 = () => {
  // STATE:
  const [priority, setPriority] = useState("Normal");
  const [iv, setIv] = useState("");
  const savedList = localStorage.getItem("FruvioList");
  const initialList = savedList ? JSON.parse(savedList) : [];
  const [list, setList] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("FruvioList", JSON.stringify(list));
    if (list === []) {
      return false;
    }
  }, [list]);

  // MANIPULATION:
  const add = () => {
    if (iv.trim() === "") {
      return false;
    }
    const affiche = [
      ...[{ id: crypto.randomUUID(), text: iv, priority }],
      ...list,
    ];
    setList(affiche);
    setIv("");
    setPriority("Normal");
  };
  const del = (id) => {
    const delet = list.filter((i) => i.id !== id);
    setList(delet);
  };
  const toutCount = list.length;
  const urgentCount = list.filter((i) => i.priority === "Urgent").length;
  const normalCount = list.filter((i) => i.priority === "Normal").length;
  const basseCount = list.filter((i) => i.priority === "Basse").length;

  const filtre = (id) => {
    if (id === "Tout") {
      setList(savedList);
    }
  };

  // RETURN:
  return (
    <div className="w-full flex justify-center ">
      <div className="w-200 bg-[#fca311] h-100 rounded-2xl">
        <h1 className="text-center text-xl font-bold  ">
          {"Achive your GOAL"}{" "}
        </h1>
        <div className="flex m-2 space-x-1 justify-center">
          <input
            value={iv}
            onChange={(e) => setIv(e.target.value)}
            placeholder="Put your note here..."
            className="bg-[#14213D] input rounded-l-xl px-5 font-bold outline-none text-[#d6d6d6] border-none w-100"
            type="text"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-[#14213D] select w-30 outline-none text-[#d6d6d6] border-none font-bold"
          >
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Basse">Basse</option>
          </select>

          <button
            onClick={add}
            className="bg-[#14213D] btn w-40 rounded-r-xl btn-soft text-[#d6d6d6] font-bold"
          >
            add
          </button>
        </div>

        <div className="flex justify-between gap-7 px-15 mt-3">
          <div className="space-x-2">
            <button onClick={() => filtre("Tout")} className="btn w-30">
              Tout ({toutCount})
            </button>

            <button
              onClick={() => {
                filtre("Urgent");
              }}
              className="btn w-30"
            >
              Urgent ({urgentCount})
            </button>

            <button onClick={() => filtre("Normal")} className="btn w-30">
              Normal ({normalCount})
            </button>

            <button onClick={() => filtre("Basse")} className="btn w-30">
              Basse ({basseCount})
            </button>
          </div>

          <div>
            <button className="btn w-30">Done</button>
          </div>
        </div>
        <div className="listes px-2 mt-4 h-50 ">
          <ul>
            {!savedList ? (
              <FaNotesMedical />
            ) : (
              list.map((list) => <li>{list.priority}</li>)
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test2;
