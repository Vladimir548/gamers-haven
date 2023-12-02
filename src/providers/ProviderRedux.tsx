'use client';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import React from 'react';

export default function ReduxProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
