import MovieImage from "@/components/Detail/MovieImage";
import MovieInfo from "@/components/Detail/MovieInfo";
import { fetchMovieDetail } from "@/lib/api";

interface Params {
  id: string;
}

interface DetailPageProps {
  params: Params;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const movieId = params.id;
  const movieDetail = await fetchMovieDetail(movieId);

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-gray-700 dark:border-gray-50 px-2.5">
        영화 정보
      </h2>
      <div className="flex flex-col items-center md:flex-row md:items-start mt-6 px-2.5">
        <MovieImage movieDetail={movieDetail} />
        <MovieInfo movieDetail={movieDetail} />
      </div>
    </section>
  );
}
