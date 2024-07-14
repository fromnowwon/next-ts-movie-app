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
    <section>
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        영화 정보
      </h2>
      <div className="flex flex-col items-center md:flex-row md:items-start mt-6">
        <MovieImage movieDetail={movieDetail} />
        <MovieInfo movieDetail={movieDetail} />
      </div>
    </section>
  );
}
