import './globals.css'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/_lib/provider'

import type { Metadata } from 'next'
import type { Prop } from '@/_types/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jason Stepp',
	description: 'Default description',
}

export default function RootLayout({ children }: Prop) {
	return (
		<html lang='en'>
			<body className={`${inter.className} text-black bg-white`}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	)
}
