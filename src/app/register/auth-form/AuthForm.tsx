'use client';

import { saveTokenStorage } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { IFormData } from '@/services/auth/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import toast from 'react-hot-toast';

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const { push } = useRouter();

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IFormData) => authService.main('register', data),
    onSuccess({ data }) {
      saveTokenStorage(data.accessToken);
      reset();
      push('/profile');
      toast.success('Registration completed successfully');
    },
    onError(err) {
      // @ts-ignore
      toast.error(err.response?.data?.message);
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    mutateRegister(data);
  };

  return (
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
          Username
          <input
            type="text"
            placeholder="Enter username: "
            {...register('name', { required: true })}
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
            {...register('password', { required: true })}
            className={cn(
              styles['input-field'],
              'w-full p-2 border rounded focus:outline-none focus:border-indigo-500',
            )}
          />
        </label>
      </div>

      <div className="mb-4">
        <button type="submit" className={styles.btn}>
          Sign up
        </button>
      </div>
      <div className="flex justify-center">
        <p>
          Have an account?{' '}
          <Link href={'/login'} className={'font-bold text-blue-500'}>
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
