'use client';
import { CircularProgress } from '@nextui-org/react';

interface ICircular {
  value: number;
}
export default function CircularProgressBar({ value }: ICircular) {
  return (
    <div className={'bg-black/50'}>
      <CircularProgress
        aria-label="Rating"
        size="lg"
        value={value}
        color="primary"
        showValueLabel={true}
      />
    </div>
  );
}
