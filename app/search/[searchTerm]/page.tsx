import SearchResults from "@/components/Search/SearchResults";
import { fetchMovieSearch } from "@/lib/api";

interface Params {
  searchTerm: string;
}

interface SearchPageProps {
  params: Params;
}

export default async function SearchPage({ params }: SearchPageProps) {
  const searchTerm = params.searchTerm;
  const { movies, hasMore } = await fetchMovieSearch(searchTerm, 1);

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        &quot;{searchTerm}&quot; 검색 결과
      </h2>
      {movies && movies.length === 0 && (
        <p className="text-center mt-6">검색 결과가 없습니다.</p>
      )}
      <SearchResults movies={movies} />
    </section>
  );
}
