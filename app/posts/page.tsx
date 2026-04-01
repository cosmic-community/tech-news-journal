import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/cosmic'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">All Posts</h1>
        <p className="mt-2 text-slate-600">Stay up to date with every story.</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No posts published yet.
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