import { MovieDetail } from "@/types/MovieTypes";
import Image from "next/image";

interface MovieImageProps {
  movieDetail: MovieDetail;
}

export default function MovieImage({ movieDetail }: MovieImageProps) {
  return (
    <div className="flex-shrink-0 w-[300px] h-[500px]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail.poster_path || movieDetail.backdrop_path
        }
  }`}
        alt={movieDetail.title ?? movieDetail.name ?? "Movie Image"}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
        width={300}
        height={500}
        style={{ objectFit: "cover" }}
        className="w-full h-full"
      />
    </div>
  );
}
