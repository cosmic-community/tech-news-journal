// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import CategoryBadge from '@/components/CategoryBadge'
import PostContent from '@/components/PostContent'
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/format'

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const category = post.metadata?.category
  const publishDate = getMetafieldValue(post.metadata?.publish_date)

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {category && <CategoryBadge category={category} />}
          <span className="text-sm text-slate-500">{formatDate(publishDate)}</span>
        </div>
        <h1 className="text-4xl font-semibold text-slate-900">
          {getMetafieldValue(post.metadata?.headline) || post.title}
        </h1>
        <p className="text-lg text-slate-600">
          {getMetafieldValue(post.metadata?.excerpt)}
        </p>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="font-medium text-slate-900">
            {getMetafieldValue(author?.metadata?.name)}
          </span>
          <span className="text-slate-400">•</span>
          <span>{getMetafieldValue(author?.metadata?.role)}</span>
        </div>
      </div>

      {post.metadata?.featured_image && (
        <img
          src={`${post.metadata.featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={post.title}
          width={800}
          height={450}
          className="mb-8 w-full rounded-3xl object-cover"
        />
      )}

      <PostContent body={getMetafieldValue(post.metadata?.body)} />
    </div>
  )
}