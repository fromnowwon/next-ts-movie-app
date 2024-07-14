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
    title: "상영중",
    type: "",
    category: "now_playing",
  },
  {
    id: 2,
    title: "상영예정작",
    type: "",
    category: "upcoming",
  },
];

export default function Playing() {
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
    <section>
      <Tabs tabData={tabData} onSelect={handleSelect} />

      {loading ? (
        <div className="flex justify-center">
          <Loader size={{ width: 70, height: 70 }} />
        </div>
      ) : (
        <Results movies={movies} />
      )}
    </section>
  );
}
