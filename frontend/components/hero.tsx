'use client'

import Image from 'next/image'

import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
} from '@/styles/fonts'
import styles from '@/styles/hero.module.css'

type HeroProps = {
	id: number
	logo: string
	hero_image: string
	brand: string
	motto: string
}

export default function Hero({ hero }: { hero: HeroProps }) {
	return (
		<section id='hero' className={styles.hero}>
			<div className={styles['hero-image-container']}>
				<Image
					alt='hero background'
					src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${hero.hero_image}`}
					width={300}
					height={300}
					className={styles['hero-img']}
					sizes='100vw'
				/>
				<div className={styles.overlay}>
					<h1 className={`${styles.brand} ${playfairDisplay.className}`}>
						{hero.brand}
					</h1>
					<h2 className={`${styles.motto} ${raleway.className}`}>
						{hero.motto.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
					</h2>
				</div>
			</div>
		</section>
	)
}
