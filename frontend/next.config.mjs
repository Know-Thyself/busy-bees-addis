/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		DEPLOY_HOOK_URL: process.env.BASE_URL,
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
	// optimizeFonts: false,
}

export default nextConfig;
