export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-slate-900">Page not found</h2>
        <p className="mt-2 text-slate-600">The content you’re looking for doesn’t exist.</p>
      </div>
    </div>
  )
}