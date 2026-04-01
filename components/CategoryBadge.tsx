import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
    >
      {getMetafieldValue(category.metadata?.name) || category.title}
    </Link>
  )
}