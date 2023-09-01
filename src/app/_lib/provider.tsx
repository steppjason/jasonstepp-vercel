'use client'

import { SessionProvider } from 'next-auth/react'

import type { Prop } from '@/_types/react'

export default function NextAuthProvider({ children }: Prop) {
	return <SessionProvider>{children}</SessionProvider>
}
