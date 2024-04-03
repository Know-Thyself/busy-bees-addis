'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Features from './features'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
} from '@/styles/fonts'
import styles from '@/styles/home.module.css'

interface Intro {
	intro: string[]
}

type IntroProps = {
	id: number
	logo: string
	hero_image: string
	brand: string
	motto: string
	program_title: string
	program: string
}

type TypicalDayProps = {
	title: string
	reading_bee_image: string
	activities: string[]
}

type FeatureProps = {
	id: number
	title: string
	description: string
	icon_name: string
}

export default function Home({
	intro,
	day,
	features,
}: {
	intro: Intro
	day: TypicalDayProps[]
	features: FeatureProps[]
}) {
	const left: string[] = []
	const right: string[] = []
	const introOb: object | any = intro
	const introObject = introOb[0]
	introObject.program
		.split('\r\n')
		.forEach((paragraph: string, index: number) =>
			index <= 1 ? left.push(paragraph) : right.push(paragraph)
		)

	const [activeSection, setActiveSection] = useState<string>('home')

	const links: string[] = ['home', 'program', 'features', 'team', 'contact']

	useEffect(() => {
		const home = document.getElementById('hero')
		const program = document.getElementById('program')
		const features = document.getElementById('features')
		const team = document.getElementById('team')
		const contact = document.getElementById('team')

		const sections = [home, program, features, team, contact]

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		}

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (entry.target.id == 'hero') {
						setActiveSection('home')
					}
					if (entry.target.id == 'program') {
						setActiveSection('program')
					}
					if (entry.target.id == 'features') {
						setActiveSection('features')
					}
					if (entry.target.id == 'team') {
						setActiveSection('team')
					}
					if (entry.target.id == 'contact') {
						setActiveSection('contact')
					}
				}
			})
		}, observerOptions)

		sections?.forEach(section => {
			section && observer.observe(section)
		})
	}, [])

	return (
		<main className={`${styles.main} ${raleway.className}`}>
			<Navbar links={links} activeSection={activeSection} />
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
			<section id='program' className={styles['program-section']}>
				<h1
					className={`${styles['program-title']} ${playfairDisplay.className}`}
				>
					{introObject.program_title}
				</h1>
				<div className={styles.line}></div>
				<div className={styles.program}>
					<div className={styles.left}>
						{left.map((paragraph: string, index: number) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					<div className={styles.right}>
						{right.map((paragraph: string, index: number) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</div>
				<div className={styles['activities-section']}>
					<h1
						className={`${styles['activities-title']} ${playfairDisplay.className}`}
					>
						{day[0].title.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
					</h1>
					<div className={styles['activities-grid-container']}>
						{day.map((activity: object | any, index: number) =>
							activity.id === 1 ? (
								<div
									key={index}
									className={styles['reading-bee-image-container']}
								>
									<Image
										src={activity.reading_bee_image.split('/public')[1]}
										width={300}
										height={200}
										alt='Reading bee'
										className={styles['reading-bee-image']}
									/>
								</div>
							) : (
								<ul key={activity.id}>
									{activity.activities.map((act: string, index: number) => (
										<li key={index}>{act}</li>
									))}
								</ul>
							)
						)}
					</div>
				</div>
			</section>
			<section id='features'>
				<Features features={features} />
			</section>
		</main>
	)
}
