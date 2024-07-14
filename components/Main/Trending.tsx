"use client";
import { useEffect, useState } from "react";
import Tabs from "./common/Tabs";
import Results from "./common/Results";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/types/MovieTypes";
import Loader from "../common/Loader";
import { Tab } from "@/types/MovieTypes";

const tabData: Tab[] = [
  {
    id: 1,
    title: "일간인기",
    type: "trending",
    category: "day",
  },
  {
    id: 2,
    title: "주간인기",
    type: "trending",
    category: "week",
  },
];

export default function Trending() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const category = tabData[activeTab].category;
      const type = tabData[activeTab].type;

      const fetchedMovies = await fetchMovies(category, type);

      setMovies(fetchedMovies);
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  const handleSelect = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="mt-7">
      <Tabs tabData={tabData} onSelect={handleSelect} />

      <div className="min-h-[312px]">
        {loading ? (
          <div className="flex items-center justify-center min-h-[312px]">
            <Loader size={{ width: 70, height: 70 }} />
          </div>
        ) : (
          <Results movies={movies} />
        )}
      </div>
    </section>
  );
}
