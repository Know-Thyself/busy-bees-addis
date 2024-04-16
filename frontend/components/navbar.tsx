'use client'

import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { montserrat, raleway } from '@/styles/fonts'
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import styles from '@/styles/navbar.module.css'

export default function Navbar({
	links,
	activeSection,
	setActiveSection,
	logo,
}: {
	links: string[]
	activeSection: string
	setActiveSection: Dispatch<SetStateAction<string>>
	logo: string
}) {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [isChecked, setIsChecked] = useState(false)
	const [screenWidth, setScreenWidth] = useState(1348)
	const [activeNav, setActiveNav] = useState(`#${activeSection}`)

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
		setIsChecked(!isChecked)
	}

	function screenTest(href: string) {
		if (window.innerWidth <= 868) {
			toggleNav()
		}
		setActiveNav(`#${href}`)
		// const scrollToTop = () => {
		// 	window.scrollTo({
		// 		top: 0,
		// 		behavior: 'smooth',
		// 	})
		// }

		// scrollToTop()
		// setActiveSection(href)
	}

	

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth)
		}
		window.addEventListener('resize', changeWidth)
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<nav
			className={`${styles['custom-header']} navbar navbar-expand-md border-0 fixed-top`}
			data-bs-theme='dark'
		>
			<div className='container-fluid align-content-center'>
				<Link className={`navbar-brand border-0 ${styles.brand}`} href='/'>
					<Image
						alt='logo'
						src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${logo}`}
						width={200}
						height={50}
						className={styles.logo}
						onClick={() => screenTest('')}
					/>
				</Link>
				<input
					id='menu__toggle'
					className={styles['menu__toggle']}
					type='checkbox'
					checked={isChecked}
					onChange={toggleNav}
				/>
				<label className={styles['menu__btn']} htmlFor='menu__toggle'>
					<span></span>
				</label>
				{(toggleMenu || screenWidth > 868) && (
					<div
						className={`text-center ${styles['menu__box']} ${raleway.className}`}
					>
						<ul className={`navbar-nav ms-auto border-0`}>
							{links.map((link, index) => (
								<li
									key={index}
									className={`nav-item me-1 ${styles['custom-nav-item']}`}
								>
									<a
										href={`#${link}`}
										className={`nav-link border-start-0 border-end-0 ${
											activeNav === link || activeSection === link
												? styles.active
												: styles['menu__item']
										}`}
										onClick={() =>
											screenTest(`${link === 'contact'} ? 'footer' : ${link}`)
										}
									>
										{link === 'program'
											? 'our program'
											: link === 'footer'
											? 'contact'
											: link}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}
