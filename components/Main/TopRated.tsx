"use client";
import { useEffect, useState } from "react";
import Tabs from "./common/Tabs";
import Results from "./common/Results";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/types/MovieTypes";
import Loader from "./common/Loader";
import { Tab } from "@/types/MovieTypes";

const tabData: Tab[] = [
  {
    id: 1,
    title: "무비차트",
    category: "popular",
  },
  {
    id: 2,
    title: "상영예정작",
    category: "upcoming",
  },
];

export default function TopRated() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const fetchedMovies = await fetchMovies(tabData[activeTab].category);

      setMovies(fetchedMovies);
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  const handleSelect = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section>
      <Tabs tabData={tabData} onSelect={handleSelect} />

      {loading ? <Loader /> : <Results movies={movies} />}
    </section>
  );
}
