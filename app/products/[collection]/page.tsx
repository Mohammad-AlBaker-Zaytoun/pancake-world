import { getProducts } from 'lib/data'; // Use your local data function
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getProducts(); // Simulate fetching a collection (you may need to define a collection structure)

  if (!collection) return notFound();

  return {
    title: `${params.collection} Collection`, // You can modify this to fit your actual collection metadata
    description: `Products under the ${params.collection} collection.`
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // Simulate fetching products for a collection
  const products = await getProducts(); // Modify this function to get the products of the specific collection if needed

  return (
    <section>
      {products.length === 0 ? (
        <p className="text-lg py-3">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} /> {/* Ensure this passes the correct type */}
        </Grid>
      )}
    </section>
  );
}
