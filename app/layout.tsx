import clsx from 'clsx';

import Providers from 'components/layout/context-providers';
import Footer from 'components/layout/footer';
import MobileMenu from 'components/layout/mobile-menu';
import { getMenu } from 'lib/menu';
import { Gochi_Hand, Jost } from 'next/font/google';
import Link from 'next/link';
import MainLogo from 'public/logo/logo';
import { ReactNode, Suspense } from 'react';
import './globals.css';

// Local ensureStartsWith function
function ensureStartsWith(value: string, prefix: string): string {
  return value.startsWith(prefix) ? value : `${prefix}${value}`;
}

const jost = Jost({ subsets: ['latin'], variable: '--main-font' });
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gochi-hand'
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://pancake-world.vercel.app`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const menu = await getMenu();

  return (
    <html lang="en" className={`${jost.className} ${gochiHand.variable}`}>
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="leading-[2em] text-black dark:bg-white">
        <Providers>
          {/* Added padding classes to handle spacing for both mobile and desktop */}
          <main className="pt-44 lg:pt-0">
            <div className="fixed right-0 top-0 z-50 flex w-full justify-end lg:w-auto">
              <div className="hidden pr-16 pt-16 lg:inline-block">{/* <Cart /> */}</div>
              <div className="flex w-full items-center justify-between bg-light-pink lg:hidden">
                <Link href="/">
                  <MainLogo
                    width="10px"
                    height="5px"
                    aria-label="Logo"
                    className={clsx('max-w-[1rem]')}
                  />
                </Link>
                <Suspense fallback={null}>
                  <MobileMenu menu={menu} />
                </Suspense>
              </div>
            </div>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
