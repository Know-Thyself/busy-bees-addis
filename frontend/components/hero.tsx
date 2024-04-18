'use client'

import Image from 'next/image'
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'

import {
	montserrat,
	raleway,
	playfairDisplayItalic,
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
				<div className={`${styles.overlay}`}>
					<AnimateCharacters
						text={hero.brand}
						el='h1'
						delay={1}
						x={40}
						className={styles.brand}
					/>
					<AnimateCharacters
						text={hero.motto.replace(/\b[a-z]/g, (x: string) =>
							x.toUpperCase()
						)}
						el='h2'
						delay={2}
						duration={1}
						y={-20}
						rotateX={380}
						className={`${styles.motto} ${raleway.className}`}
					/>
				</div>
			</div>
		</section>
	)
}
