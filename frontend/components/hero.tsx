'use client'

import { CldImage } from 'next-cloudinary'
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

export default function Hero({
	hero,
}: {
	hero: HeroProps
}) {
	return (
		<section id='hero' className={styles.hero}>
			<div className={styles['hero-image-container']}>
				<CldImage
					alt='logo'
					width='800'
					height='500'
					src={hero.hero_image.split('upload/')[1]}
					crop={'fill'}
					className={styles['hero-img']}
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
