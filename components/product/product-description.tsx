import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/product'; // Use your local Product type

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6">
        <h1 className="mb-3 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-secondary-light-blue p-2 text-sm leading-none text-white">
          <Price amount={product.price.toFixed(2)} currencyCode="USD" />
        </div>
      </div>

      {/* Render product description */}
      {product.descriptionHtml ? (
        <Prose className="mb-6 leading-tight" html={product.descriptionHtml} />
      ) : null}

      {/* Call to Order button */}
      <a
        href="tel:+96178913441" // Replace with your desired phone number
        className="hover:bg-secondary-blue inline-block rounded bg-secondary-light-blue px-6 py-3 text-center text-sm leading-none text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Call to Order
      </a>
    </>
  );
}
