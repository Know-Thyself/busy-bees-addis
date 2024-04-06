import {
	Playfair_Display,
	Montserrat,
	Oswald,
	Raleway,
	Concert_One,
} from 'next/font/google'

const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	preload: true,
})

const playfairDisplayItalic = Playfair_Display({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	style: 'italic',
	preload: true,
})

const raleway = Raleway({ subsets: ['latin'], display: 'swap', preload: true })

const concertOne = Concert_One({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	weight: '400',
})

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	preload: true,
})

const oswald = Oswald({ subsets: ['latin'], display: 'swap', preload: true })

export {
	playfairDisplay,
	playfairDisplayItalic,
	raleway,
	montserrat,
	oswald,
	concertOne,
}
