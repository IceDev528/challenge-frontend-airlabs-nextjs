import './globals.css'
import { Inter, DM_Sans, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_grotesk",
});

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
