import type { Metadata } from 'next';

import Prose from 'components/prose';
import { getPage } from 'lib/data';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const metafields = [
    {
      id: '1', // Example id
      key: 'multiple_text_contact',
      value: '', // Optional value can be empty or provided
      namespace: 'Pancake-Paradise',
      type: 'text' // Example type (could be any appropriate type based on your logic)
    }
  ];
  const page = await getPage('contact', metafields);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function ContactPage() {
  // Update the metafields array to include id and type
  const metafields = [
    {
      id: '1', // Example id
      key: 'multiple_text_contact',
      value: '', // Optional value can be empty or provided
      namespace: 'Pancake-Paradise',
      type: 'text' // Example type (could be any appropriate type based on your logic)
    }
  ];

  const page = await getPage('contact', metafields);

  if (!page) return notFound();

  const GoogleMapEmbed = () => (
    <div className="mb-[70px] leading-7">
      <h2 className="mb-8 text-header-2 font-semibold leading-none">Find us</h2>
      <p className="leading-7">
        We’re easy to find and ready to welcome you! Visit us at our cozy location and enjoy a
        pancake experience like no other. Whether you're stopping by for breakfast or brunch, we're
        here to serve you with the best pancakes in town.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3313.502269806187!2d35.512138900000004!3d33.850944399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUxJzAzLjQiTiAzNcKwMzAnNDMuNyJF!5e0!3m2!1sen!2slb!4v1730291300444!5m2!1sen!2slb"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-2.5"
      ></iframe>

      <h3 className="mt-2.5 text-header-3 font-semibold">Our location</h3>
      <p>Lebanon</p>
      <p>Beirut Southern Border</p>
      <p>Ber Al Abed - Under Sfier Bridge</p>
      <p>+961 78 913 441</p>
    </div>
  );

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-[70px]" html={page.body as string} />
      <GoogleMapEmbed />
    </>
  );
}
