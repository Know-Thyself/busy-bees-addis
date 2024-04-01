'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo/busy-bees-addis-logo.png'
import {
	playfairDisplay,
	playfairDisplayItalic,
	montserrat,
	oswald,
} from '@/styles/fonts'
import { usePathname } from 'next/navigation'
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import styles from '@/styles/navbar.module.css'

export default function Navbar() {
	const pathname = usePathname()
	const [toggleMenu, setToggleMenu] = useState(false)
	const [isChecked, setIsChecked] = useState(false)
	const [screenWidth, setScreenWidth] = useState(1348)

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
		setIsChecked(!isChecked)
	}

	function screenTest() {
		if (window.innerWidth <= 767) {
			toggleNav()
		}
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
			<div className='container-fluid'>
				<Link
					className={`navbar-brand border-0 ${styles.brand} ${montserrat.className}`}
					href='/'
				>
					<Image src={logo} alt='Busy Bees Addis Logo' className={styles.logo} />
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
				{(toggleMenu || screenWidth > 767) && (
					<div
						className={`text-center ${styles['menu__box']} ${montserrat.className}`}
					>
						<ul
							className={`navbar-nav ms-auto border-0 ${styles['menu__box__ul']}`}
						>
							<li className={`nav-item me-1 ${styles['custom-nav-item']}`}>
								<Link
									href='/'
									className={`nav-link p-3 border-start-0 border-end-0 ${
										pathname === '/' ? styles.active : styles['menu__item']
									}`}
									onClick={screenTest}
								>
									Home
								</Link>
							</li>
							<li className={`nav-item me-1 ${styles['custom-nav-item']}`}>
								<Link
									href='/features'
									className={`nav-link p-3 border-start-0 border-end-0 ${
										pathname === '/features'
											? styles.active
											: styles['menu__item']
									}`}
									onClick={screenTest}
								>
									Features
								</Link>
							</li>
							<li className={`nav-item me-1 ${styles['custom-nav-item']}`}>
								<Link
									href='/our-program'
									className={`nav-link p-3 border-start-0 border-end-0 ${
										pathname === '/our-program'
											? styles.active
											: styles['menu__item']
									}`}
									onClick={screenTest}
								>
									Our Program
								</Link>
							</li>
							<li className={`nav-item me-1 ${styles['custom-nav-item']}`}>
								<Link
									href='/team'
									className={`nav-link p-3 border-start-0 border-end-0 ${
										pathname === '/team' ? styles.active : styles['menu__item']
									}`}
									onClick={screenTest}
								>
									Team
								</Link>
							</li>
							<li className={`nav-item ${styles['custom-nav-item']}`}>
								<Link
									href='/contact'
									className={`nav-link p-3 border-start-0 ${
										pathname === '/contact'
											? styles.active
											: styles['menu__item']
									}`}
									onClick={screenTest}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}
