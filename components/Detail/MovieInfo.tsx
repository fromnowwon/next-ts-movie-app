import { MovieDetail } from "@/types/MovieTypes";
import Link from "next/link";

interface MovieInfoProps {
  movieDetail: MovieDetail;
}

export default function MovieInfo({ movieDetail }: MovieInfoProps) {
  return (
    <div className="mt-4 md:mt-0 md:ml-5">
      <div>
        <h2 className="text-lg font-bold ">
          {movieDetail.title || movieDetail.name}
        </h2>
        <span className="text-sm">{movieDetail.original_title}</span>
      </div>
      <div className="border-t pt-3 mt-3">
        <p className="mb-3 text-md">{movieDetail.overview}</p>
        <p className="mb-1 text-sm">
          <span className="font-semibold mr-1">장르: </span>
          {movieDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="mb-1 text-sm">
          <span className="font-semibold mr-1">개봉: </span>
          {movieDetail.release_date || movieDetail.first_air_date}
        </p>
        <p className="mb-1 text-sm">
          <span className="font-semibold mr-1">평점: </span>
          {movieDetail.vote_count}
        </p>
        <p className="mb-1 text-sm">
          <span className="font-semibold mr-1">상영시간: </span>
          {movieDetail.runtime}분
        </p>
      </div>
      <div className="mt-5">
        <Link
          href={`/ticket/${movieDetail.id}`}
          className="p-3 bg-primary text-white hover:bg-primary-dark transition-colors duration-100"
        >
          예매하기
        </Link>
      </div>
    </div>
  );
}
