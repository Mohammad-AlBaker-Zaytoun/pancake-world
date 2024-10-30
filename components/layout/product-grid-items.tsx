import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/data'; // Use your local Product type
import { imagePlaceholder } from 'lib/utils';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item
          key={product.handle}
          className="aspect-square w-full animate-fadeIn min-[480px]:w-[calc(50%-10px)] md:w-[calc(33.33%-13.6px)] lg:w-[calc(33.33%-13.3px)]"
        >
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.price.toFixed(2), // Use price from local Product type
                currencyCode: 'USD'
              }}
              placeholder={`data:image/svg+xml;base64,${imagePlaceholder(358, 358)}`}
              src={product.imageUrl} // Use imageUrl from local Product type
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
