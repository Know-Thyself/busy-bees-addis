'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from './hero'
import Program from './program'
import Features from './features'
import Compound from './compound'
import OpenHouse from './opening'
import Team from './team'
import dynamic from 'next/dynamic'
import Mapbox from './map'
import { raleway } from '@/styles/fonts'
import Footer from './footer'
import Images from './image'
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

type AddressProps = {
	id: number
	street: string
	city: string
	country: string
	phone_number_1: string
	phone_number_2: string
	phone_number_3: string
	image: string
	facebook: string
	instagram: string
}

type RegisterProps = {
	id: number
	title: string
	subtitle: string
	requirements: string[]
}

type ClImagesProps = {
	id: number
	image: string
}

type ExamplesProps = {
	id: number
	title: string
	image: string
}

type HeroProps = {
	id: number
	logo: string
	hero_image: string
	brand: string
	motto: string
}

export default function Home({
	intro,
	day,
	features,
	compound_images,
	open_house_images,
	team,
	address,
	register,
	images,
	examples,
	hero,
}: {
	intro: Intro
	day: TypicalDayProps[]
	features: FeatureProps[]
	compound_images: ImagesProps[]
	open_house_images: OpenHouseImagesProps[]
	team: TeamProps[]
	address: AddressProps
	register: RegisterProps
	images: ClImagesProps[]
	examples: ExamplesProps[]
	hero: HeroProps[]
}) {
	const addressObj: object | any = address
	const addressObject = addressObj[0]
	let heroObject: object | any = hero
	heroObject = hero[0]
	let logo: string = heroObject.logo
	console.log(logo, '<----------logo')
	const [activeSection, setActiveSection] = useState<string>('')

	const links: string[] = ['program', 'features', 'gallery', 'team', 'footer']

	useEffect(() => {
		const program = document.getElementById('program')
		const features = document.getElementById('features')
		const gallery = document.getElementById('gallery')
		const team = document.getElementById('team')
		const footer = document.getElementById('footer')

		const sections = [program, features, gallery, team, footer]

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
					if (entry.target.id == 'footer') {
						setActiveSection('footer')
					}
				}
			})
		}, observerOptions)

		sections?.forEach(section => {
			section && observer.observe(section)
		})
	}, [])

	// const MapWithNoSSR = dynamic(() => import('./map'), {
	// 	ssr: false,
	// })

	return (
		<main className={`${styles.main} ${raleway.className}`}>
			<Navbar logo={logo} links={links} activeSection={activeSection} />
			<Hero intro={intro} />
			<Program intro={intro} day={day} />
			<Features features={features} />
			<section id='gallery' className={styles.compound}>
				<Compound compound_images={compound_images} />
				<OpenHouse open_house_images={open_house_images} register={register} />
			</section>
			<Team team={team} />
			<Images image={images} examples={examples} />
			{/* <Mapbox /> */}
			<Footer
				address={addressObject}
				links={links}
				activeSection={activeSection}
			/>
		</main>
	)
}
