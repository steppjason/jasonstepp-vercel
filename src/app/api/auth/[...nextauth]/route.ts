import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import FacebookProvider from 'next-auth/providers/facebook'
// import DiscordProvider from 'next-auth/providers/discord'
// import GitHubProvider from 'next-auth/providers/github'

import type { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_CLIENT_ID,
		// 	clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		// }),
		// DiscordProvider({
		// 	clientId: process.env.DISCORD_CLIENT_ID,
		// 	clientSecret: process.env.DISCORD_CLIENT_SECRET,
		// }),
		// GitHubProvider({
		// 	clientId: process.env.GITHUB_ID,
		// 	clientSecret: process.env.GITHUB_SECRET,
		// }),
	],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
