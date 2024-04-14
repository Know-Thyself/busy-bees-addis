'use client'

import Image from 'next/image'
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

interface Intro {
	intro: string[]
}

type HeroProps = {
	id: number
	logo: string
	hero_image: string
	brand: string
	motto: string
}

export default function Hero({
	intro,
	hero,
}: {
	intro: Intro
	hero: HeroProps
}) {
	const introOb: object | any = intro
	const introObject = introOb[0]
	return (
		<section id='hero' className={styles.hero}>
			<div className={styles['hero-image-container']}>
				{/* <Image
					src={introObject.hero_image.split('/public')[1]}
					className={styles['hero-img']}
					alt={introObject.brand}
					width={700}
					height={500}
				/> */}
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
