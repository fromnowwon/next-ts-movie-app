"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between max-w-6xl">
      <input
        type="text"
        placeholder="검색어 입력"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-r-2 border-l-2 p-2 text-sm"
      />
      <button type="submit" disabled={searchQuery === ""} className="ml-2">
        <FiSearch />
      </button>
    </form>
  );
}
