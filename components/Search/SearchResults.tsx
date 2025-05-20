import { Movie } from "@/types/MovieTypes";
import SearchCard from "./SearchCard";

interface SearchResultsProps {
  movies: Movie[];
}

export default function SearchResults({ movies }: SearchResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-9 py-4 px-2.5">
      {movies.map((movie) => (
        <div key={movie.id}>
          <SearchCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
