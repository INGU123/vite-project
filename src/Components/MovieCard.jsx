import { BiHeart } from "react-icons/bi";
function MovieCard({ movie }) {
  const favs = () => {
    alert("clicked movie");
  };

  return (
    <div className="inline-block ml-10 mt-5 border border-brown-200 rounded rounded-1xl hover:scale-102 duration-500 ease">
      <div className="movie-poster">
        <img className="w-50 h-55" src={movie.url} alt={movie.title} />
      </div>
      <div className="relative left-40 bottom-50">
        <button
          onClick={favs}
          className="bg-red-500 hover:scale-120 border-none bg-transparent duration-800 ease hover:rotate-360 hover:bg-fill-white"
        >
          <BiHeart />
        </button>
      </div>
      <div className="movie.info">
        <h3 className="text-2xl flex justify-center items-center text-white [text-shadow:0px_0px_20px_black]">
          {movie.title}
        </h3>
        <p className="text-sm font-bold flex justify-center items-center text-red-400 ">
          {movie.realese_date}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
