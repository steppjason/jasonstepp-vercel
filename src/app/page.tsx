'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
	const { status, data: session } = useSession()

	return <main>{session?.user?.name}</main>
}
