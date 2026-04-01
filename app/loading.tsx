export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-48 rounded bg-slate-200" />
        <div className="h-4 w-72 rounded bg-slate-200" />
        <div className="h-64 w-full rounded-3xl bg-slate-200" />
      </div>
    </div>
  )
}