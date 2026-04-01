import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Tech News Journal
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/posts" className="transition hover:text-slate-900">
            Posts
          </Link>
          <Link href="/categories" className="transition hover:text-slate-900">
            Categories
          </Link>
          <Link href="/authors" className="transition hover:text-slate-900">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}