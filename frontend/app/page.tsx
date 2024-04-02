import Image from 'next/image'
import styles from '@/styles/home.module.css'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
} from '@/styles/fonts'

async function getIntro() {
	const res = await fetch('http://localhost:8000/intro')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getDayActivities() {
	const res = await fetch('http://localhost:8000/typical-day')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const intro = await getIntro()
	const activities = await getDayActivities()
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<Image
					src={intro[0].hero_image.split('/public')[1]}
					className={styles['hero-img']}
					alt={intro[0].brand}
					width={700}
					height={500}
				/>
				<div className={styles.overlay}>
					<h1 className={`${styles.brand} ${oswald.className}`}>
						{intro[0].brand}
					</h1>
					<h2 className={`${styles.motto} ${raleway.className}`}>
						{intro[0].motto.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
					</h2>
				</div>
			</section>
		</main>
	)
}
