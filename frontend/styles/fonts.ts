import { Montserrat, Oswald, Raleway, Playfair_Display } from 'next/font/google'

export const playfairDisplayItalic = Playfair_Display({
	subsets: ['cyrillic'],
	weight: 'variable',
	display: 'swap',
	style: 'italic',
	preload: true,
})

export const raleway = Raleway({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: 'variable',
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	preload: true,
})

export const oswald = Oswald({ subsets: ['latin'], display: 'swap', preload: true })

