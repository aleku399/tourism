import Image from 'next/image'
import PostBody from '../../../components/post-body'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'


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
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        {!post?.slug ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-32">
              <p>{title}</p>
              <Image
                src={post.image}
                alt={`Cover Image for ${post.heading}`}
                width={1300}
                height={630}
              />
              <PostBody content={content} />
            </article>
          </>
        )}
      </div>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
