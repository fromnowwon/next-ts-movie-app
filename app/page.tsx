import NowPlaying from "@/components/Main/NowPlaying";
import Trending from "@/components/Main/Trending";
import React from "react";

export default function Home() {
  return (
    <div>
      <NowPlaying />
      <Trending />
    </div>
  );
}
