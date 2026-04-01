import Link from 'next/link'
import { Post } from '@/types'
import { formatDate } from '@/lib/format'
import { getMetafieldValue } from '@/lib/cosmic'
import CategoryBadge from '@/components/CategoryBadge'

interface PostCardProps {
  post: Post
  variant?: 'featured' | 'default'
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  const author = post.metadata?.author
  const category = post.metadata?.category
  const publishDate = getMetafieldValue(post.metadata?.publish_date)
  const headline = getMetafieldValue(post.metadata?.headline) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        variant === 'featured' ? 'md:flex-row' : ''
      }`}
    >
      {post.metadata?.featured_image && (
        <img
          src={`${post.metadata.featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
          alt={post.title}
          width={600}
          height={400}
          className={`w-full object-cover ${
            variant === 'featured' ? 'md:h-full md:w-1/2' : 'h-56'
          }`}
        />
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          {category && <CategoryBadge category={category} />}
          <span>{formatDate(publishDate)}</span>
        </div>
        <div>
          <Link href={`/posts/${post.slug}`} className="group">
            <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-slate-700">
              {headline}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-600">
          {author ? (
            <Link href={`/authors/${author.slug}`} className="font-medium text-slate-900">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </Link>
          ) : (
            <span className="font-medium text-slate-900">Unknown author</span>
          )}
          <Link href={`/posts/${post.slug}`} className="text-slate-500 hover:text-slate-700">
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}