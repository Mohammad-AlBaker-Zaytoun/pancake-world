// pages/page.tsx

import Featuredproducts from 'components/layout/featured-products';
import Hero from 'components/layout/hero';
import Promo from 'components/layout/promo';
import { normalPancake } from 'lib/product';

export const metadata = {
  title: 'Pancake Paradise',
  description:
    'At Pancake Paradise, we believe that breakfast should be a delightful experience every day...',
  openGraph: {
    type: 'website'
  },
  verification: {
    google: 'ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY'
  }
};

export default function HomePage() {
  const featuredProductsHome = [normalPancake.toObject()];
  
  return (
    <>
      <Hero />
      <Featuredproducts products={featuredProductsHome} />
      <Promo />
    </>
  );
}
