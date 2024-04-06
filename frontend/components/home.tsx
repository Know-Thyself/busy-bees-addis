'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from './hero'
import Program from './program'
import Features from './features'
import Compound from './compound'
import OpenHouse from './opening'
import Team from './team'
import {
	raleway,
} from '@/styles/fonts'
import styles from '@/styles/home.module.css'

interface Intro {
	intro: string[]
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

type ImagesProps = {
	id: number
	compound_image: string
	caption: string
}

type OpenHouseImagesProps = {
	id: number
	open_house_image: string
	caption: string
}

type TeamProps = {
	id: number
	name: string
	position: string
	image: string
	about: string
}

export default function Home({
	intro,
	day,
	features,
	compound_images,
	open_house_images,
	team,
}: {
	intro: Intro
	day: TypicalDayProps[]
	features: FeatureProps[]
	compound_images: ImagesProps[]
	open_house_images: OpenHouseImagesProps[]
	team: TeamProps[]
}) {
	const introOb: object | any = intro
	const introObject = introOb[0]
	const [activeSection, setActiveSection] = useState<string>('')

	const links: string[] = ['program', 'features', 'gallery', 'team', 'contact']

	useEffect(() => {
		const program = document.getElementById('program')
		const features = document.getElementById('features')
		const gallery = document.getElementById('gallery')
		const team = document.getElementById('team')
		const contact = document.getElementById('team')

		const sections = [program, features, gallery, team, contact]

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
					if (entry.target.id == 'gallery') {
						setActiveSection('gallery')
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
			<Hero intro={intro} />
			<Program intro={intro} day={day} />
			<Features features={features} />
			<section id='gallery' className={styles.compound}>
				<Compound compound_images={compound_images} />
				<OpenHouse open_house_images={open_house_images} />
			</section>
			<Team team={team} />
		</main>
	)
}
