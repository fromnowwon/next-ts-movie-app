import { Movie } from "@/types/MovieTypes";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMovies = async (category: string, type: string) => {
  let url = `${BASE_URL}`;

  if (type !== "") url += `/${type}`;

  url += `/movie/${category}?api_key=${API_KEY}&language=ko-KR&page=1`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();
  const movies = data.results;

  console.log(movies);

  // 인기도 내림차순
  if (category === "popular") {
    movies.sort((a: Movie, b: Movie) => b.popularity - a.popularity);
  }

  return movies;
};
