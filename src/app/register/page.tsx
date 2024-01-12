import AuthForm from '@/app/register/auth-form/AuthForm';
import style from './auth-form/AuthForm.module.scss';
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className={style.card}>
        <h2 className="text-2xl text-center  mb-4">Registration</h2>
        <AuthForm />
      </div>
    </div>
  );
}
