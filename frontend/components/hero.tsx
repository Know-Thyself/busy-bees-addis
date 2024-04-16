'use client'

import Image from 'next/image'
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'

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
		<AnimateContainer y={-100} duration={1}>
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
					{/* <AnimateContainer className={styles.overlay} delay={1} duration={1}> */}
						<div className={styles.overlay}>
							{/* <h1
								className={`m-0 p-0 ${styles.brand} ${playfairDisplayItalic.className}`}
							>
								{hero.brand}
							</h1> */}
							<AnimateCharacters
								text={hero.brand}
								el='h1'
								className={`${styles.brand} ${playfairDisplayItalic.className}`}
								delay={1}
								x={40}
							/>
							{/* <h2 className={`${styles.motto} ${raleway.className}`}>
								{hero.motto.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
							</h2> */}
							<AnimateCharacters
								text={hero.motto.replace(/\b[a-z]/g, (x: string) =>
									x.toUpperCase()
								)}
								el='h2'
								className={`${styles.motto} ${raleway.className}`}
								delay={2}
								duration={1}
								y={-20}
								rotateX={380}
							/>
						</div>
					{/* </AnimateContainer> */}
				</div>
			</section>
		</AnimateContainer>
	)
}
