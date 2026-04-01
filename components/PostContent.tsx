import { marked } from 'marked'

export default function PostContent({ body }: { body: string }) {
  const html = marked.parse(body || '')

  return (
    <div
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}