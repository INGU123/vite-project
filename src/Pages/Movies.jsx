import { useState } from "react";
import MovieCard from "../Components/MovieCard";
function Movies() {
  const movie = [
    { id: 1, title: "IronMan", realese_date: "2009" },
    { id: 2, title: "SpiderMan", realese_date: "2012" },
    { id: 3, title: "AntMan", realese_date: "2023" },
    { id: 4, title: "BatMan", realese_date: "2021" },
  ];

  const [IV, setIV] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setIV("");
  };

  return (
    <div className="ml-40 max-w-screen min-h-screen mt-5">
      <form onSubmit={submit} className="flex justify-center">
        <input
          type="text"
          value={IV}
          onChange={(id) => setIV(id.target.value)}
          className="px-2 w-100 h-10 text-sm text-white border rounded-l-lg border-blue-500  focus:outline-none shadow-sm"
          placeholder="search movies..."
        />
        <button className="h-10 px-4 inline-block text-sm bg-blue-500  border-blue-500 rounded-r-lg shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none active:bg-blue-300">
          Search
        </button>
      </form>

      <div className="movie-list">
        {movie.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(IV) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Movies;
