"use client";

import { useState } from "react";
import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { MotionDiv } from "../common/MotionDiv";

interface ChartCardProps {
  movie: Movie;
  index: number;
}

export default function ChartCard({ movie, index }: ChartCardProps) {
  const [imageError, setImageError] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageUrl = `https://image.tmdb.org/t/p/original${
    movie.poster_path || movie.backdrop_path
  }`;

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        // delay: index * 0.05,
        ease: "easeInOut",
        duration: 0.25,
      }}
    >
      <p className="bg-primary text-xl text-white text-center font-semibold">
        No.{index + 1}
      </p>
      <div className="group w-[100%] cursor-pointer shadow-md transition-shadow duration-200 mt-1">
        <Link href={`detail/${movie.id}`}>
          <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-200">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={movie.title ?? movie.name ?? "Movie Image"}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-300" />
            )}
          </div>
          <div className="w-full p-2">
            <h2 className="text-md font-bold truncate">
              {movie.title || movie.name}
            </h2>
            <p className="flex items-center">
              <span className="text-xs">
                {movie.release_date || movie.first_air_date} 개봉
              </span>
              <FiThumbsUp className="h-5 mr-1 ml-3 size-3" />
              <span className="text-sm">{movie.vote_count}</span>
            </p>
          </div>
        </Link>
      </div>
    </MotionDiv>
  );
}
