import Playing from "@/components/Main/Playing";
import Trending from "@/components/Main/Trending";
import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto py-6 px-2.5">
      <Playing />
      <Trending />
    </main>
  );
}
