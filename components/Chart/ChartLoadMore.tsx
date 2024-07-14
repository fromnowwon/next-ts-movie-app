"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { fetchPopularMovies } from "@/lib/api";
import ChartCard from "./ChartCard";
import { Movie } from "@/types/MovieTypes";

let page = 2;

export default function ChartLoadMore() {
  const { ref, inView } = useInView();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadMoreMovies = async () => {
      const { movies: newMovies, hasMore: newHasMore } =
        await fetchPopularMovies(page);
      const combinedMovies = [...movies, ...newMovies];

      setMovies(combinedMovies);
      setHasMore(newHasMore);

      page++;
    };

    if (inView) loadMoreMovies();
  }, [hasMore, inView]);

  return (
    <>
      {movies.map((movie, index) => (
        <ChartCard key={movie.id} movie={movie} index={movies.length + index} />
      ))}
      {hasMore && (
        <div ref={ref} className="col-span-full flex justify-center py-3">
          <Image src="/spinner.svg" alt="Loading..." width={70} height={70} />
        </div>
      )}
    </>
  );
}
