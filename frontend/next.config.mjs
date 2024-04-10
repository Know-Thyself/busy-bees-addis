/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_KEY: process.env.BASE_URL,
	},
}

export default nextConfig;
