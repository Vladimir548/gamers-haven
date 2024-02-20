'use client';

import { saveTokenStorage } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { IFormData } from '@/services/auth/auth.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import Link from 'next/link';
import { errorCatch } from '@/api/api.helper';
import cn from 'classnames';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const {
    mutate: mutateLogin,
    isPending: isLoginPending,
    error,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IFormData) => authService.main('login', data),
    onSuccess: async ({ data }) => {
      saveTokenStorage(data.accessToken);
      reset();
      push('/profile');
      toast.success('Success');
      console.log('dfdfdf');
      await queryClient.invalidateQueries({ queryKey: ['get-current-user'] });
    },
    onError(err) {
      // @ts-ignore
      toast.error(err?.response?.data.message);
    },
  });
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
                className={cn(
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
                className={cn(
                  styles['input-field'],
                  'w-full p-2 border rounded focus:outline-none focus:border-indigo-500',
                )}
              />
            </label>
          </div>
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
