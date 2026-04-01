import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Tech News Journal',
  description: 'A modern editorial blog powered by Cosmic.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG ?? ''

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>"
        />
      </head>
      <body className="bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}