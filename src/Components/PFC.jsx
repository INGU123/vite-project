import { useState } from "react";

function PFC() {
  // State:
  const [IV, setIV] = useState("");
  const [you, setYou] = useState("");
  const [ia, setIa] = useState("");
  const [scoreYOU, setScoreYOU] = useState(0);
  const [ScoreIA, setScoreIA] = useState(0);
  const [parti, setParti] = useState(0);
  const [raw, setRaw] = useState(0);
  const choix = ["Rock", "Raper", "Scissor"];

  // Manipulation:
  let choixIA = () => {
    const index = Math.floor(Math.random() * choix.length);
    return choix[index];
  };

  const YOU = (YOU) => {
    const IA = choixIA();
    if (YOU === IA) {
      setIV("Raw");
      setRaw(raw + 1);
    } else if (
      (YOU === "Rock" && IA === "Scissor") ||
      (YOU === "Scissor" && IA === "Raper") ||
      (YOU === "Raper" && IA === "Rock")
    ) {
      setIV("Win");
      setScoreYOU(scoreYOU + 1);
    } else {
      setIV("Loose");
      setScoreIA(ScoreIA + 1);
    }

    setYou(YOU);
    setIa(IA);
    setParti(parti + 1);
  };

  const reset = () => {
    let conf = confirm("Are you sure to reset the Game?");
    if (conf === true) {
      setScoreIA(0);
      setScoreYOU(0);
      setParti(0);
      setRaw(0);
      setIV("");
      setYou("");
      setIa("");
    }
  };
  // Return:
  return (
    <>
      <div className="w-full h-100 mt-5 flex flex-col items-center">
        <h1 className="text-xl text-white text-center underline ">
          {"Rock,Raper,Scissors,Shoot!"}
        </h1>
        <div className="main w-full flex gap-4 justify-center">
          <div className=" flex card w-2/4 h-100 bg-base-300 space-y-4">
            {/* Les cartes */}
            <div className="flex justify-between w-full">
              <div>
                <h3 className="card-title text-neutral text-xl font-bold italic m-10">
                  You :
                </h3>
                <input
                  readOnly
                  value={you}
                  type="text"
                  className="outline-none border-none text-center input ml-3"
                />
              </div>
              <span className="text-xl italic ml-1 text-primary mt-2 text-center mb-3">
                {" "}
                Parti:{parti}{" "}
              </span>
              <div>
                <h3 className="card-title text-neutral text-xl font-bold italic m-10">
                  AI :
                </h3>
                <input
                  readOnly
                  value={ia}
                  type="text"
                  className="outline-none border-none text-center input mr-3"
                />
              </div>
            </div>

            {/* Le resultat pour chaque */}
            <div className=" flex w-full justify-center   text-xl font-bold">
              <input
                type="text"
                value={IV}
                readOnly
                className="border-none input w-3/5 outline-none bg-gray-300  text-center text-xl"
              />
            </div>

            {/* Les boutons */}
            <div className="w-full flex gap-2  bottom-5 justify-center ">
              <button
                onClick={() => YOU("Rock")}
                className="btn btn-soft btn-primary text- w-1/4 p-4"
              >
                Rock
              </button>

              <button
                onClick={() => YOU("Raper")}
                className="btn btn-soft btn-secondary text- w-1/4 p-4"
              >
                Raper
              </button>

              <button
                onClick={() => YOU("Scissor")}
                className="btn btn-soft btn-warning text- w-1/4 p-4"
              >
                Scissor
              </button>
            </div>
            {/* Les score accumuler */}
            <div className="flex gap-2 w-full justify-center ">
              <input
                type="text"
                className="outline-none border-none input py-5 px-2 w-1/4 text-center text-3xl font-bold [font-family:monospace]"
                value={scoreYOU}
                readOnly
              />
              <input
                type="text"
                className="outline-none border-none input py-5 px-2 w-1/4 text-center text-3xl font-bold [font-family:monospace]"
                value={raw}
                readOnly
              />
              <input
                type="text"
                className="outline-none border-none input py-5 px-2 w-1/4 text-center text-3xl font-bold [font-family:monospace]"
                value={ScoreIA}
                readOnly
              />
            </div>
            <div>
              <button
                onClick={reset}
                className="btn btn-xl btn-error w-full  flex py-6"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PFC;
