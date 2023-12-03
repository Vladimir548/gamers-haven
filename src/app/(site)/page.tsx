import Home from '@/app/client-pages/home/Home';
import dynamic from 'next/dynamic';
const DynamicHome = dynamic(() => import('@/app/client-pages/home/Home'), {
  loading: () => <p>Loading..............</p>,
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
