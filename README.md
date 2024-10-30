# [Pancake-World Landpage](https://panini-cake.vercel.app/)

The live project can be found at [https://panini-cake.vercel.app/](https://panini-cake.vercel.app/)

![Hero Image](/public/imgs/banner.png?raw=true 'Panini Cake Shop hero')

A Next.js 14 and App Router-ready template featuring:

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- Edge Runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS

## Instructions for running locally

Please fork or clone the repo

```bash
https://github.com/Mohammad-AlBaker-Zaytoun/pancake-world
```

then install the dependencies with

```bash
npm install
```

You will need to use the environment variables [defined in `.env.example`](.env.example) to run this template. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

```bash
COMPANY_NAME="Your company"
TWITTER_CREATOR="@your company"
TWITTER_SITE="Your site"
SITE_NAME="your site name"

FEATURED_PRODUCT_SLUG="special-cakes"
MAIN_MENU_NAME="main-menu"
```

and the app should be running on your local with no errors.

The current menu name is _main-menu_, but you can give any name in your Shopify admin and change the .env variable accordingly.