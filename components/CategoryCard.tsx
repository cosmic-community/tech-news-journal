import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
      <p className="mt-2 text-sm text-slate-600">
        {getMetafieldValue(category.metadata?.description)}
      </p>
      <Link
        href={`/categories/${category.slug}`}
        className="mt-4 inline-flex text-sm font-medium text-slate-700"
      >
        Explore →
      </Link>
    </article>
  )
}