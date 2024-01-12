'use client';

import clsx from 'clsx';

import { saveTokenStorage } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { IFormData } from '@/services/auth/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import Link from 'next/link';
import { errorCatch } from '@/api/api.helper';
import ToastComponent from '@/app/components/toast/Toast';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const { push } = useRouter();

  const {
    mutate: mutateLogin,
    isPending: isLoginPending,
    error,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IFormData) => authService.main('login', data),
    onSuccess({ data }) {
      saveTokenStorage(data.accessToken);
      reset();
      push('/profile');
    },
  });
  const err = errorCatch(error);
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    mutateLogin(data);
  };

  return (
    <div>
      <div className={styles.card}>
        <h2 className="text-2xl text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label className="text-gray-400">
              Email
              <input
                type="email"
                placeholder="Enter email: "
                {...register('email', { required: true })}
                className={clsx(
                  styles['input-field'],
                  'w-full p-2 border rounded focus:outline-none focus:border-indigo-500',
                )}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="text-gray-400">
              Password
              <input
                type="password"
                placeholder="Enter password: "
                {...register('password', { required: 'This is required.' })}
                className={clsx(
                  styles['input-field'],
                  'w-full p-2 border rounded focus:outline-none focus:border-indigo-500',
                )}
              />
            </label>
          </div>
          <p className="text-red-600 my-2">{err}</p>
          <div className="mb-4">
            <button disabled={isLoginPending} type="submit" className={styles.btn}>
              Sign in
            </button>
          </div>
          <div className="flex justify-center">
            <p className={''}>
              <span className={'text-[12px] ls:text-base'}>Don&apos;t have an account? </span>
              <Link
                href={'/register'}
                className={
                  'font-bold text-blue-500 ease-linear duration-300 hover:text-fuchsia-500'
                }
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
