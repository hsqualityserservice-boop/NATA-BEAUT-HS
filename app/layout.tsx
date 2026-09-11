import type { Metadata } from 'next'
import './globals.css'
import './dashboard.css'
export const metadata: Metadata = { title: 'Mery Key | Institut de beauté', description: 'Votre espace beauté privé à Genève.' }
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html> }
