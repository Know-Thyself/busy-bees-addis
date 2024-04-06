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

interface Intro {
	intro: string[]
}

export default function Hero({ intro }: {intro: Intro}) {
	const introOb: object | any = intro
	const introObject = introOb[0]
	return (
		<section id='hero' className={styles.hero}>
			<div className={styles['hero-image-container']}>
				<Image
					src={introObject.hero_image.split('/public')[1]}
					className={styles['hero-img']}
					alt={introObject.brand}
					width={700}
					height={500}
				/>
				<div className={styles.overlay}>
					<h1 className={`${styles.brand} ${playfairDisplay.className}`}>
						{introObject.brand}
					</h1>
					<h2 className={`${styles.motto} ${raleway.className}`}>
						{introObject.motto.replace(/\b[a-z]/g, (x: string) =>
							x.toUpperCase()
						)}
					</h2>
				</div>
			</div>
		</section>
	)
}
