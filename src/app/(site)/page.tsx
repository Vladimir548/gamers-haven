import dynamic from 'next/dynamic';
import Loading from '@/app/components/loading/Loading';
const DynamicHome = dynamic(() => import('@/app/client-pages/home/Home'), {
  loading: () => <Loading />,
});

export default async function HomePage() {
  return (
    <>
      <div>
        <DynamicHome />
      </div>
    </>
  );
}
