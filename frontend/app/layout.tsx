import type { Metadata } from 'next'
import './globals.css'
import { raleway } from '@/styles/fonts'

export const metadata: Metadata = {
	title: 'Busy Bees Addis',
	description: 'Where Imagination and Joyful Learning Blossom!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<head>
				<link rel='icon' href='/icon.ico' sizes='any' />
			</head>
			<body className={raleway.className}>{children}</body>
		</html>
	)
}
