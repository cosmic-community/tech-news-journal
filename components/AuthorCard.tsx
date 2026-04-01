import Link from 'next/link'
import { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <article className="flex gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {author.metadata?.headshot && (
        <img
          src={`${author.metadata.headshot.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
          alt={author.title}
          width={120}
          height={120}
          className="h-24 w-24 rounded-2xl object-cover"
        />
      )}
      <div className="flex flex-col justify-between">
        <div>
          <Link href={`/authors/${author.slug}`}>
            <h3 className="text-lg font-semibold text-slate-900">{author.title}</h3>
          </Link>
          <p className="mt-1 text-sm text-slate-600">
            {getMetafieldValue(author.metadata?.role)}
          </p>
          <p className="mt-3 text-sm text-slate-500">
            {getMetafieldValue(author.metadata?.bio)}
          </p>
        </div>
        <Link href={`/authors/${author.slug}`} className="mt-4 text-sm font-medium text-slate-700">
          View posts →
        </Link>
      </div>
    </article>
  )
}