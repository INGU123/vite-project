import BlockNotes from "../Components/BlockNotes";
import Calculator from "../Components/Calculator";
import RFC from "../Components/PFC";

export default function Projets() {
  return (
    <div className="ml-40 min-w-[100%] ">
      <div className="flex justify-center space-x-10 w-full border h-145 ">
        <BlockNotes /> <Calculator />
      </div>
      <div>
        <h1 className="text-base-100 text-xl font-bold flex justify-center mt-5 underline uppercase">
          Jeux(x)
        </h1>
        <RFC />
      </div>
      <div>
        <h1 className="text-base-100 text-xl font-bold flex justify-center mt-5 underline uppercase ">
          Citation
        </h1>
      </div>
    </div>
  );
}
