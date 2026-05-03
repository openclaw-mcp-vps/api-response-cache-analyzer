import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Response Cache Analyzer',
  description: 'Analyze API responses to optimize caching strategies'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8405d182-1b55-42d8-9a4f-1d7cf5db9b5c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
