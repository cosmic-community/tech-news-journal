import PostCard from '@/components/PostCard'
import CategoryCard from '@/components/CategoryCard'
import { getCategories, getPosts } from '@/lib/cosmic'

export default async function HomePage() {
  const posts = await getPosts()
  const categories = await getCategories()
  const featuredPost = posts[0]
  const latestPosts = posts.slice(1)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Tech News Journal
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            The latest in content systems, design, and developer workflows.
          </h1>
          <p className="text-lg text-slate-600">
            Explore the newest articles from your editorial team, powered by Cosmic.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">Featured Story</h2>
        {featuredPost ? (
          <PostCard post={featuredPost} variant="featured" />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No featured posts available.
          </div>
        )}
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Latest Posts</h2>
        </div>
        {latestPosts.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No additional posts yet.
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">Browse Categories</h2>
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
      </section>
    </div>
  )
}