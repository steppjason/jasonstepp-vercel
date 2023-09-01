'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

import type { Metadata } from 'next'

const metadata: Metadata = {
	title: 'Dashboard - Jason Stepp',
	description: '',
}

export default function Dashboard() {
	const { status, data: session } = useSession()

	if (session && session.user) {
		console.log(session)
		return (
			<>
				<div>You are logged in</div>
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		)
	}

	return (
		<>
			<div>You are not logged in</div>
			<button onClick={() => signIn()}>Sign In</button>
		</>
	)
}
