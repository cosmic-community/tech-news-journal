import AuthorCard from '@/components/AuthorCard'
import { getAuthors } from '@/lib/cosmic'

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Authors</h1>
        <p className="mt-2 text-slate-600">Meet the writers behind the stories.</p>
      </div>

      {authors.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No authors published yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}