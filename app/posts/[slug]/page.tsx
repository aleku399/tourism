import Image from 'next/image'
import PostBody from '../../../components/post-body'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import Inquiry from "@/components/shared/inquiry";
import MapComp from "@/components/shared/map";


type Props = {
    params: {
        slug: string
    }
}

export default  async function Post({ params }: Props) {
  const { slug } = params;

  const post = getPostBySlug(slug, [
    'heading',
    'title',
    'date',
    'slug',
    'content',
    'image',
  ])

  const title = `${post.title}`;

  const content = await markdownToHtml(post.content || '');
  

  return (
    <>
      <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
        {!post?.slug ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-2">
              <p
                className="my-0.5 animate-fade-up  opacity-0 md:text-xl"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
              >
                {title}
              </p>
              {
                post.heading !== "Bwindi Impenetrable" ? (
                  <Image
                  src={post.image}
                  alt={`Cover Image for ${post.heading}`}
                  width={1300}
                  height={630}
                />
                ) : null
              }
              <PostBody content={content} />
            </article>
          </>
        )}
      </div>
      <MapComp />
      <div className="z-10 w-full  px-5">
        <Inquiry />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
