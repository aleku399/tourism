import React from 'react';
import Image from 'next/image';
import Balancer from "react-wrap-balancer";
import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostBody from "@/components/post-body";

export default async function SearchPlace({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const { slug, date, location, numOfPeople } = searchParams;

  if (!slug) {
    return <div>No results found.</div>;
  }

  const post = getPostBySlug(slug, [
    'heading',
    'title',
    'date',
    'slug',
    'content',
    'image',
  ]);

  const title = `${post.title}`;

  const content = await markdownToHtml(post.content || '');

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      {!post?.slug ? (
        <p >Loading…</p>
      ) : (
        <>
          <article className="mb-32">
            <p
                className="my-0.5 animate-fade-up  opacity-0 md:text-xl"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
                {title}
            </p>
            <Image
              src={post.image}
              alt={`Cover Image for ${post.heading}`}
              width={1300}
              height={630}
            />
            <PostBody content={content} />

            <div className="border p-4 bg-white flex flex-col items-center rounded-md shadow-md">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-gray-500">Group Size</th>
                  <th className="px-4 py-2 text-gray-500">Price per person (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1 PAX</td>
                  <td className="border px-4 py-2">5130</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2 PAX</td>
                  <td className="border px-4 py-2">3500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">4 PAX</td>
                  <td className="border px-4 py-2">2910</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">6 PAX</td>
                  <td className="border px-4 py-2">2720</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-1 text-gray-500 text-center space-y-2">
              <p style={{ opacity: 1 }}>
                Trip Duration: <strong>4 days, 3 nights.</strong>
              </p>
              <p style={{ opacity: 1 }}>
                Starting Point: <strong>Entebbe, Uganda.</strong>
              </p>
              <p style={{ opacity: 1 }}>
                Destination: <strong>{location}.</strong>
              </p>
              <p style={{ opacity: 1 }}>
                Note: A 30% booking is due upon booking, with the balance cleared 1 month before the trip starts.
              </p>
            </div>
            <button className="mt-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
              Book Now
            </button>
          </div>
          </article>
        </>
      )}
    </div>
  );
}
