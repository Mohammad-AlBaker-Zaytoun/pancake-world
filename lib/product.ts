// lib/product.ts

export class Product {
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
  images: Array<{ url: string; altText: string }>;
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
  variants: Array<{ id: string; title: string; availableForSale: boolean; price: number }>;  // Add variants here

  constructor(
    id: string,
    title: string,
    description: string,
    price: number,
    available: boolean,
    imageUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.available = available;
    this.imageUrl = imageUrl;
    this.handle = title.toLowerCase().replace(/\s+/g, '-');
    this.availableForSale = available;
    this.descriptionHtml = `<p>${description}</p>`;
    this.options = [
      {
        id: '1',
        name: 'Size',
        values: ['Small', 'Medium', 'Large']
      }
    ];
    this.priceRange = {
      minVariantPrice: { amount: price.toFixed(2), currencyCode: 'USD' },
      maxVariantPrice: { amount: price.toFixed(2), currencyCode: 'USD' }
    };
    this.featuredImage = {
      url: imageUrl,
      altText: `${title} image`
    };
    this.images = [
      { url: imageUrl, altText: `${title} image 1` },
      { url: imageUrl, altText: `${title} image 2` }
    ];
    this.seo = {
      title: `${title}`,
      description: description
    };
    this.tags = ['pancakes', 'breakfast', 'dessert'];
    this.updatedAt = new Date().toISOString();
    this.variants = [
      {
        id: '1',
        title: 'Small',
        availableForSale: true,
        price: price
      },
      {
        id: '2',
        title: 'Medium',
        availableForSale: true,
        price: price + 1.0
      },
      {
        id: '3',
        title: 'Large',
        availableForSale: true,
        price: price + 2.0
      }
    ];  // Added variants here
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      price: this.price,
      available: this.available,
      imageUrl: this.imageUrl,
      handle: this.handle,
      availableForSale: this.availableForSale,
      descriptionHtml: this.descriptionHtml,
      options: this.options,
      priceRange: this.priceRange,
      featuredImage: this.featuredImage,
      images: this.images,
      seo: this.seo,
      tags: this.tags,
      updatedAt: this.updatedAt,
      variants: this.variants  // Added variants here
    };
  }
}



// Create a sample product
export const normalPancake = new Product(
  '1',
  'Normal Pancake',
  'A classic buttermilk pancake, served with maple syrup.',
  2.99,
  true,
  '/pancakes/normal-pancake.jpg'
);

// Helper functions to simulate product fetching
export async function getProduct(handle: string): Promise<Product | undefined> {
  const products = [normalPancake]; // Add more products as needed
  return products.find((product) => product.handle === handle);
}

export async function getProductRecommendations(id: string): Promise<Product[]> {
  // Simulating related products. Replace with actual logic.
  return [normalPancake]; // For now, returning the same product. Replace with related products.
}
