import { useState } from "react";

const Citation = () => {
  // STATE:
  const [el, setEl] = useState([
    {
      citation: "Personne n'est au-dessus de toi apart Dieu et toi meme",
      autor: "Fruvio",
    },
    {
      citation: "Si tu gagnes tu vis. Si tu perds, tu meurs",
      autor: "Eren Yeager",
    },
    {
      citation: "Je suis la verite et la vie, suiver moi et vous aurer la vie",
      autor: "Jesus Christ",
    },
    { citation: "Je t'aime mon pruno", autor: "TAKALi Sadjida" },
  ]);
  // MANIPULATION:

  const chooseCitation = () => {
    console.log(
      el.map((el) => el.citation),
      el.map((el) => el.autor),
    );
    let elChoosen = el.map((el) => el.citation);
    setEl(elChoosen);
  };
  // RETURN:
  return (
    <div className="flex justify-center">
      <div className="card w-100 h-70 bg-white space-y-3">
        <div className="card-title">
          <h1 className="text-center w-full">Feed your Soul</h1>
        </div>
        <div className="recit bg-base-300 w-[95%] ml-2 h-30">{el}</div>
        <div className="h-11 flex justify-end">
          <div className="autor w-70 h-10 bg-base-300 mr-3"></div>
        </div>
        <div className="button">
          <button onClick={chooseCitation} className="btn btn-info w-full">
            Citation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Citation;
