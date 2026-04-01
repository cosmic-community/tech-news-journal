import CategoryCard from '@/components/CategoryCard'
import { getCategories } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Categories</h1>
        <p className="mt-2 text-slate-600">Explore posts by topic.</p>
      </div>

      {categories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No categories available.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}