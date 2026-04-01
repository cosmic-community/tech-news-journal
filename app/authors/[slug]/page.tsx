// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'

export default async function AuthorPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center">
        {author.metadata?.headshot && (
          <img
            src={`${author.metadata.headshot.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={author.title}
            width={150}
            height={150}
            className="h-32 w-32 rounded-2xl object-cover"
          />
        )}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Author
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">{author.title}</h1>
          <p className="mt-2 text-slate-600">{getMetafieldValue(author.metadata?.role)}</p>
          <p className="mt-4 text-slate-600">{getMetafieldValue(author.metadata?.bio)}</p>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No posts from this author yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}