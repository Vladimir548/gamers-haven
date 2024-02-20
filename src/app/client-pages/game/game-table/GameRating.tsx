'use client';

import cn from 'classnames';
import style from './style.module.scss';
import { FaStar } from 'react-icons/fa';
interface IGameRating {
  rating: number | undefined;
  rating_count: number | undefined;
}
export default function GameRating({ rating, rating_count }: IGameRating) {
  const percent = rating?.toFixed(0) || 0;
  const circumference = 2 * Math.PI * 45;
  // @ts-ignore
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <div
      className={cn(
        'w-[220px] h-[220px] flex justify-center items-center border-none bg-gray-900  rounded-lg ',
        style.rating,
      )}
    >
      <div className="flex flex-col w-full h-full px-2 py-1">
        <div className=" flex justify-center flex-1 gap-x-2 items-center  rounded-full">
          <div className="relative">
            <svg className="w-[100px] h-[100px] " viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#415775" strokeWidth="7" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#007BFF"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fill="#fff"
                fontSize="1.3em"
                fontWeight="bold"
              >
                {percent}%
              </text>
            </svg>
          </div>
        </div>
        <div className="flex justify-center p-2 rounded-lg items-center w-full border border-[#415775]">
          <span>Vote: {rating_count}</span>
        </div>
      </div>
    </div>
  );
}
