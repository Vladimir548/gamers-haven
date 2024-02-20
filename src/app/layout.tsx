import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import QueryProviders from '@/providers/QueryProviders';
import Sidebar from '@/app/components/sidebar/Sidebar';

import ReduxProvider from '@/providers/ProviderRedux';

import NavigationBottom from '@/app/components/navigation-bottom/NavigationBottom';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GamersHaven',
  description: 'All information about games',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'bg-primary'}>
      <body className={montserrat.className}>
        <QueryProviders>
          <ReduxProvider>
            <div className="flex gap-x-5 lg:gap-x-0">
              <div className={'hidden w-[260px] relative md:block '}>
                <Sidebar />
              </div>
              <Toaster position={'top-center'} />
              <main className={'relative w-full '}>
                {/*<div className="sticky left-0 top-0 z-[99] bg-primary/80 backdrop-blur">*/}
                {/*  <Header />*/}
                {/*</div>*/}

                <div className=" px-0 md:px-2">{children}</div>

                <div className="mt-[50px] md:mt-0">
                  <NavigationBottom />
                </div>
              </main>
            </div>
          </ReduxProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
