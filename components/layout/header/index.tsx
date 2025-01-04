import clsx from 'clsx';
import Grid from 'components/grid';
import { getMenu } from 'lib/menu';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import MainLogo from 'public/logo/logo';

export default async function Header({ isInternalPage }: { isInternalPage?: boolean }) {
  const menu = await getMenu();

  return (
    <header
      className={clsx(
        'relative z-10 mx-auto hidden lg:block', // Added hidden and lg:block here
        !isInternalPage && 'lg:pt-12'
      )}
    >
      <div
        className={clsx(
          'flex flex-col items-center justify-center',
          isInternalPage && 'mb-[70px] bg-light-pink'
        )}
      >
        <Link href="/">
          <MainLogo
            width="10rem"
            height="9.3rem"
            aria-label="Logo"
            className={clsx(
              'max-w-none', // Removed hidden lg:block since it's handled by the header
              isInternalPage && 'my-1 max-h-32 max-w-32'
            )}
          />
        </Link>
        {menu.length ? (
          <Grid
            className={clsx(
              'mt-5 gap-x-8 rounded-full bg-main-red-barn bg-opacity-20 px-5 py-2.5 text-xl font-medium uppercase text-main-red-barn', // Removed hidden
              isInternalPage && 'bg-transparent pt-0'
            )}
          >
            {menu.map((item: Menu) => (
              <Grid.Item key={item.title} className="cursor-pointer">
                <Link href={item.path}>{item.title}</Link>
              </Grid.Item>
            ))}
          </Grid>
        ) : null}
      </div>
    </header>
  );
}
