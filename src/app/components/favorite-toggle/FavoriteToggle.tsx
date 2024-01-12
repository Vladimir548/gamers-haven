'use client';
import React, { useEffect, useState } from 'react';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { FavoriteDtoAdd, QueryFavorite } from '@/app/query/query-favorite';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UseCurrentUser from '@/app/hooks/useCurrentUser';
import Link from 'next/link';

interface IFavoriteToggle {
  id: number | undefined;
  title: string | undefined;
  genres: string[] | undefined;
  poster: string | undefined;
  rating: number | undefined;
  releaseYear: number | undefined;
}
export default function FavoriteToggle({
  id,
  title,
  genres,
  poster,
  rating,
  releaseYear,
}: IFavoriteToggle) {
  const { mutate, data } = useMutation({
    mutationKey: ['add favorite'],
    mutationFn: QueryFavorite.addFavorite,
  });
  const { data: dataQuery } = useQuery({
    queryKey: ['check is favorite'],
    queryFn: () => QueryFavorite.getIsFavorite(id),
  });

  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(false);
  useEffect(() => {
    if (data?.isFavorite === undefined) {
      setIsFavorite(dataQuery);
    } else {
      setIsFavorite(data?.isFavorite);
    }
  }, [dataQuery, data]);
  const user = UseCurrentUser();

  const handlerAddFavorite = async (
    gameId: number | undefined,
    gameTitle: string | undefined,
    genres: string[] | undefined,
    poster: string | undefined,
    rating: number | undefined,
    releaseYear: number | undefined,
  ) => {
    const dto: FavoriteDtoAdd = {
      gameId,
      gameTitle,
      genres,
      poster,
      rating,
      releaseYear,
    };
    mutate(dto);
  };
  return (
    <div>
      {user ? (
        <button onClick={() => handlerAddFavorite(id, title, genres, poster, rating, releaseYear)}>
          {isFavorite ? (
            <span className={'text-red-600'}>
              <MdFavorite size={24} />
            </span>
          ) : (
            <span className={'text-red-600'}>
              <MdFavoriteBorder size={24} />
            </span>
          )}
        </button>
      ) : (
        <Link href={'/login'}>
          {' '}
          <MdFavoriteBorder size={24} />
        </Link>
      )}
    </div>
  );
}
