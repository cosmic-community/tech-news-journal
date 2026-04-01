'use client'

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
        <h2 className="text-xl font-semibold text-red-700">Something went wrong</h2>
        <p className="mt-2 text-red-600">{error.message}</p>
      </div>
    </div>
  )
}