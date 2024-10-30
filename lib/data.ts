// lib/data.ts

export type Collection = {
    path: string;
    updatedAt: string;
};

export type Product = {
    handle: string;
    title: string;
    price: number;
    imageUrl: string;
    updatedAt: string;
};

export type Metafields = {
    id?: string; // Make id optional
    key: string;
    value?: string;
    namespace?: string;
    type?: string; // Make type optional
};

export type Page = {
    handle: string;
    updatedAt: string;
    title?: string;
    body?: string;
    seo?: {
        title: string;
        description: string;
    };
    bodySummary?: string;
    metafields?: Metafields[];  // Using updated Metafields type
    createdAt?: string;
};

// Simulated collections data
export const collections: Collection[] = [
    { path: '/collection/pancakes', updatedAt: new Date().toISOString() },
    { path: '/collection/waffles', updatedAt: new Date().toISOString() },
];

// Simulated products data
export const products: Product[] = [
    {
        handle: 'normal-pancake',
        title: 'Normal Pancake',
        price: 2.99,
        imageUrl: '/pancakes/normal-pancake.jpg',
        updatedAt: new Date().toISOString()
    },
];

// Simulated pages data
export const pages: Page[] = [
    {
        handle: 'about',
        title: 'About Us',
        body: '<p>At Pancake Paradise, we’re passionate about one thing: creating the perfect pancake experience. What started as a love for fluffy, golden pancakes has grown into a haven for breakfast lovers. Every dish we serve is crafted with care, using fresh ingredients and a dash of creativity to bring you mouthwatering flavors in every bite. Whether you\'re here for a comforting classic or an exciting new creation, our goal is to make every visit feel like a warm, delicious escape. Welcome to the paradise of pancakes—where every bite is pure bliss!</p>',
        seo: {
            title: 'About Us - Pancake Paradise',
            description: 'Learn more about Pancake Paradise and what we do.'
        },
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        bodySummary: 'About us page summary',
    },
    {
        handle: 'contact',
        title: 'Get in Touch!',
        body: '<p>We’d love to hear from you! Whether you have a question about our menu, want to share feedback, or need assistance with an order, we’re here to help. Reach out to us by filling out the contact form below, and our team will get back to you as soon as possible. You can also give us a call or visit us at our location. We look forward to making your experience at Pancake Paradise even sweeter! <br><br>Phone: +961 78 913 441</p>',
        seo: {
            title: 'Contact Us - Pancake Paradise',
            description: 'Get in touch with Pancake Paradise.'
        },
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        bodySummary: 'Contact us page summary',
        metafields: [
            {
                id: '1',  // Assigning a unique ID
                key: 'multiple_text_contact',
                value: '<p>Additional contact information.</p>',
                namespace: 'Pancake-Paradise',
                type: 'text'  // Assuming this is a text field
            }
        ]
    },
];

// Simulated function to fetch collections
export async function getCollections(): Promise<Collection[]> {
    return collections;
}

// Simulated function to fetch products
export async function getProducts(): Promise<Product[]> {
    return products; // Simulating fetching from local array
}

// Simulated function to fetch pages
export async function getPages(): Promise<Page[]> {
    return pages;
}

// Simulated function to fetch a single page by handle
export async function getPage(handle: string, metafields?: Metafields[]): Promise<Page | undefined> {
    const page = pages.find(p => p.handle === handle);
    if (!page) return undefined;

    // Optionally include the metafields if requested
    if (metafields) {
        page.metafields = page.metafields?.filter(mf =>
            metafields.some(field => field.key === mf.key && field.namespace === mf.namespace)) || [];
    }

    return page;
}
