import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CustomCarousel from 'components/custom-carousel';
import { GridTileImage } from 'components/grid/tile';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { getProduct, getProductRecommendations } from 'lib/product'; // Use your local functions
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, altText } = product.featuredImage;
  const indexable = true; // Set to true since we're not using hidden product tags

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              alt: altText
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: 'USD',
      highPrice: product.price.toFixed(2), // Convert price to string here
      lowPrice: product.price.toFixed(2) // Convert price to string here
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="w-full">
        <div className="flex flex-col rounded-lg px-2.5 md:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.map((image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full md:pl-2.5 lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8 pl-2.5">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        <CustomCarousel>
          {relatedProducts.map((product) => (
            <li key={product.handle} className="aspect-square w-3/5 shrink-0 sm:w-2/5 lg:w-[28%]">
              <Link
                className="unselectable relative h-full w-full"
                href={`/product/${product.handle}`}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.price.toFixed(2), // Convert price to string
                    currencyCode: 'USD'
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          ))}
        </CustomCarousel>
      </ul>
    </div>
  );
}
