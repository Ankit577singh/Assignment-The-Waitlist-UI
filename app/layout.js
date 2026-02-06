import './globals.css'

export const metadata = {
  title: 'Internal Tools Access',
  description: 'Request access to internal tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}