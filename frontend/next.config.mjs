/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		DEPLOY_HOOK_URL: process.env.DEPLOY_HOOK_URL,
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
	// optimizeFonts: false,
}

export default nextConfig
