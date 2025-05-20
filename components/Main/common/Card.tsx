"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { Movie } from "@/types/MovieTypes";
import { MotionDiv } from "@/components/common/MotionDiv";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageUrl = `https://image.tmdb.org/t/p/original${
    movie.poster_path || movie.backdrop_path || ""
  }`;

  const [imageError, setImageError] = useState(false);

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="group w-[170px] cursor-pointer sm:hover:shadow-slate-300 sm:shadow-md sm:border sm:border-slate-200 sm:m-3 transition-all hover:scale-105 transform duration-300"
    >
      <Link href={`detail/${movie.id}`}>
        <div className="relative w-full h-[234px] overflow-hidden bg-gray-200">
          {!imageError ? (
            <Image
              src={imageUrl}
              alt={movie.title ?? movie.name ?? "movie image"}
              width={300}
              height={500}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-300" />
          )}
        </div>
        <div className="w-full p-2">
          <h2 className="text-md font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            <span className="text-sm">
              {movie.release_date || movie.first_air_date}
            </span>
            <FiThumbsUp className="h-5 mr-1 ml-3 size-3" />
            <span className="text-sm">{movie.vote_count}</span>
          </p>
        </div>
      </Link>
    </MotionDiv>
  );
}
