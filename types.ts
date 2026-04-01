// Changed: Made metadata optional on CosmicObject to align with optional metadata in derived types.
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata?: Record<string, unknown> // Changed: Optional to prevent TS2430 incompatibility
  type?: string
  created_at?: string
  modified_at?: string
}

export interface Author extends CosmicObject {
  type?: 'authors'
  metadata?: {
    name?: string
    role?: string
    bio?: string
    headshot?: {
      url: string
      imgix_url: string
    }
  }
}

export interface Category extends CosmicObject {
  type?: 'categories'
  metadata?: {
    name?: string
    description?: string
  }
}

export interface Post extends CosmicObject {
  type?: 'posts'
  metadata?: {
    headline?: string
    excerpt?: string
    body?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    author?: Author
    category?: Category
    publish_date?: string
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}