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
  const movies = await fetchMovieSearch(searchTerm);

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-gray-700 dark:border-gray-50 px-2.5">
        &quot;{decodeURIComponent(searchTerm)}&quot; 검색 결과
      </h2>
      {movies && movies.length === 0 && (
        <p className="text-center mt-6">검색 결과가 없습니다.</p>
      )}
      <SearchResults movies={movies} />
    </section>
  );
}
