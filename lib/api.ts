import { Movie, MovieDetail } from "@/types/MovieTypes";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMovies = async (category: string, type: string) => {
  let url = `${BASE_URL}`;

  if (type !== "") url += `/${type}`;

  url += `/movie/${category}?api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();
  const movies = data.results;

  return movies as Movie[];
};

interface FetchMoviesResponse {
  movies: Movie[];
  hasMore: boolean;
}

// 인기차트
export const fetchPopularMovies = async (
  page: number
): Promise<FetchMoviesResponse> => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}&include_adult=false`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();
  const movies = data.results;

  if (movies.length === 0 || page > 4) {
    return { movies: movies, hasMore: false };
  }

  // 인기도 내림차순
  movies.sort((a: Movie, b: Movie) => b.popularity - a.popularity);

  return { movies, hasMore: true };
};

// 영화 검색
export const fetchMovieSearch = async (searchTerm: String) => {
  const url = `${BASE_URL}/search/movie?query=${searchTerm}&api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();
  const movies = data.results;

  return movies;
};

// 영화 상세
export const fetchMovieDetail = async (movieId: string) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();
  const movieDetail = data;

  return movieDetail as MovieDetail;
};
