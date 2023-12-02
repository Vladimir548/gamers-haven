'use client';

import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number = 300): string {
  const [isDebounce, setIsDebounce] = useState(value);
  useEffect(() => {
    const isTimeout = setTimeout(() => setIsDebounce(value), delay);
    return () => clearTimeout(isTimeout);
  }, [value, delay]);
  return isDebounce;
}
