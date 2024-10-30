// components/featured-card.tsx

'use client';

import { Button } from 'components/button';
import { useRouter } from 'next/navigation';

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
  priceRange: { minVariantPrice: { amount: string; currencyCode: string }; maxVariantPrice: { amount: string; currencyCode: string } };
  featuredImage: { url: string; altText: string };
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
};

export default function FeaturedCard({ product }: { product: ProductPlainObject }) {
  const router = useRouter();

  return (
    <div className="w-3/5 shrink-0 cursor-grab overflow-hidden rounded-xl bg-secondary-light-blue bg-opacity-50 pb-2.5 shadow-md last:mr-0 sm:w-2/5 lg:w-[28%]">
      <div
        className="no-repeat h-52 w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${product.featuredImage.url}')`
        }}
      ></div>
      <div className="p-4">
        <h2 className="font-gochi-hand text-4xl font-semibold text-main-red-barn">
          {product.title}
        </h2>
        <p className="text-base leading-none text-white">
          {product.description.substring(0, 90)}...
        </p>
        <Button onClick={() => router.push(`/product/${product.handle}`)} className="mt-5">
          View Product
        </Button>
      </div>
    </div>
  );
}
