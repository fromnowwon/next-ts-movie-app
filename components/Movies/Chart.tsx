import { fetchMovies } from "@/lib/api";
import ChartCard from "./ChartCard";
import { Movie } from "@/types/MovieTypes";

export default async function Chart() {
  const movies = await fetchMovies("popular", "");

  return (
    <div className="sm:grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-9 mt-6">
      {movies.length > 0 &&
        movies.map((movie, index) => (
          <ChartCard key={movie.id} movie={movie} index={index} />
        ))}
    </div>
  );
}
