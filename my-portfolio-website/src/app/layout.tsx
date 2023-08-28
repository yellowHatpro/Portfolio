import './globals.css'

export const metadata = {
  title: 'yellowhatpro',
  description: 'Ashutosh Aswal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
