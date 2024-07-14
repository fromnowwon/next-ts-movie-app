import { fetchMovieDetail } from "@/lib/api";
import Image from "next/image";

interface Params {
  id: string;
}

interface TicketPageProps {
  params: Params;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const movieId = params.id;
  const movieDetail = await fetchMovieDetail(movieId);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        {movieDetail.title || movieDetail.name} 예매하기
      </h2>
      <Image
        src="/dummy_ticket-page.png"
        width={1000}
        height={500}
        alt={movieDetail.title ?? movieDetail.name ?? "Ticket page"}
        className="mt-6 pb-10"
      />
    </div>
  );
}
