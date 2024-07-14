import { fetchPopularMovies } from "@/lib/api";
import ChartCard from "./ChartCard";

export default async function Chart() {
  const { movies } = await fetchPopularMovies(1);

  return (
    <>
      {movies.length > 0 &&
        movies.map((movie, index) => (
          <ChartCard key={movie.id} movie={movie} index={index} />
        ))}
    </>
  );
}
