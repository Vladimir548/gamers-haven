import type { Metadata } from 'next';
import AuthForm from './auth-form/AuthForm';
import style from './auth-form/AuthForm.module.scss';
import { errorCatch } from '@/api/api.helper';
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center ">
      <div>
        <AuthForm />
      </div>
    </div>
  );
}
