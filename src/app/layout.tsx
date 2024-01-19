import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import './globals.scss';
import QueryProviders from '@/providers/QueryProviders';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/header/Header';
import ReduxProvider from '@/providers/ProviderRedux';

import ProviderNextUi from '@/providers/ProviderNextUI';

import NavigationBottom from '@/app/components/navigation-bottom/NavigationBottom';
import back from '../../public/neon_4.png';

const noto = Noto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GamersHaven',
  description: 'All information about games',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'bg-primary'}>
      <body className={noto.className}>
        <QueryProviders>
          <ReduxProvider>
            <ProviderNextUi>
              <div className="flex">
                <div className={'hidden w-[260px] relative md:block '}>
                  <Sidebar />
                </div>
                <main className={'relative pt-2 w-full '}>
                  {/*<div className="sticky left-0 top-0 z-[99] bg-primary/80 backdrop-blur">*/}
                  {/*  <Header />*/}
                  {/*</div>*/}
                  <div className=" px-0 md:px-2">{children}</div>
                  <div className="mt-[50px] md:mt-0">
                    <NavigationBottom />
                  </div>
                </main>
              </div>
            </ProviderNextUi>
          </ReduxProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
