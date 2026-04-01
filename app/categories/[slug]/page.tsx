// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10 space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Category
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">{category.title}</h1>
        <p className="text-slate-600">
          {getMetafieldValue(category.metadata?.description)}
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No posts in this category yet.
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