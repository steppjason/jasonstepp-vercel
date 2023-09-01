import LoginButton from './_components/loginButton'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard - Jason Stepp',
	description: '',
}

export default function Dashboard() {
	return (
		<>
			<div>You are not logged in</div>
			<LoginButton></LoginButton>
		</>
	)
}
