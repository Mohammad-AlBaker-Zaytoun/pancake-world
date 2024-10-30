// components/layout/featured-products.tsx

'use client';

import CustomCarousel from 'components/custom-carousel';
import FeaturedCard from 'components/featured-card';

type ProductPlainObject = {
  id: string;
  title: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
  handle: string;
  availableForSale: boolean;
  descriptionHtml: string;
  options: Array<{ id: string; name: string; values: string[] }>;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  featuredImage: { url: string; altText: string };
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
};

export default function Featuredproducts({ products }: { products: ProductPlainObject[] }) {
  return (
    <section className="container mx-auto my-[70px] max-w-[1140px]">
      <div className="px-2.5">
        <h2 className="mb-2.5 text-center text-header-2 font-semibold leading-none">
          Featured Products
        </h2>
        <h3 className="mx-auto max-w-3xl text-center text-header-3 leading-none">
          Explore our top picks—each pancake a delicious masterpiece crafted to perfection. Discover
          your new favorite today!
        </h3>
      </div>
      <CustomCarousel className="mt-12 pl-2.5">
        {products?.map((product) => <FeaturedCard key={product.id} product={product} />)}
      </CustomCarousel>
    </section>
  );
}
