'use server';
import HeaderNav from '@/app/components/header/HeaderNav';

export default async function Header() {
  return (
    <div className={'h-[60px] w-full hidden md:flex justify-between '}>
      <div>
        <HeaderNav />
      </div>
    </div>
  );
}
