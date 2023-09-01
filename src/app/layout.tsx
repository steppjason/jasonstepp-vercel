import './globals.css'
import { Inter } from 'next/font/google'
import NextAuthProvider from './lib/nextAuthProvider'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jason Stepp',
	description: 'Default description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} text-black bg-white`}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	)
}
