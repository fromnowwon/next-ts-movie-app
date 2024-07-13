import { Movie } from "@/types/MovieTypes";

interface ResultsProps {
  movies: Movie[];
}

export default function Results({ movies }: ResultsProps) {
  return <div>Results</div>;
}
