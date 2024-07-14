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
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-gray-700 dark:border-gray-50">
        {movieDetail.title || movieDetail.name} 예매하기
      </h2>
      <Image
        src="/dummy_ticket-page.png"
        width={1000}
        height={500}
        alt={movieDetail.title ?? movieDetail.name ?? "Ticket page"}
        className="mt-6 pb-10"
      />
    </section>
  );
}
