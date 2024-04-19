'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
	faPhone,
	faMapLocationDot,
	faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import logo from '@/public/images/logo/busy-bees-addis-logo.png'
import hiBeeImage from '@/public/images/footer/hiBee.png'
import {
	montserrat,
	raleway,
} from '@/styles/fonts'
import AnimateContainer from '@/animations/container-animation'
import styles from '@/styles/footer.module.css'

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

export default function Footer({
	contactInfo,
	links,
	activeSection,
}: {
	contactInfo: AddressProps
	links: string[]
	activeSection: string
}) {
	const [activeNav, setActiveNav] = useState(`#${activeSection}`)
	const handleClick = (href: string) => {
		setActiveNav(`#${href}`)
	}
	return (
		<AnimateContainer
			el='section'
			delay={0.4}
			duration={1}
			once
			amount={0.1}
			id='footer'
			className={styles['footer-section']}
		>
			<div className={`${styles.footer} ${raleway.className}`}>
				<div className={`${styles.addresses} ${styles['footer-item']}`}>
					<div>
						<h4 className={`fw-semibold`}>Contact us</h4>
						<div>
							<h5 className={styles.address}>
								<FontAwesomeIcon icon={faMapLocationDot} /> &nbsp;Address:
							</h5>
							<p>
								{contactInfo.street}, <span>{contactInfo.city}</span>,{' '}
								<span>{contactInfo.country}</span>
							</p>
						</div>
						<div>
							<h5 className={styles.phone}>
								<FontAwesomeIcon icon={faPhone} /> &nbsp;Phone Numbers:
							</h5>
							<p>
								{contactInfo.phone_number_1},{' '}
								<span>{contactInfo.phone_number_2}</span>,{' '}
								<span>{contactInfo.phone_number_3}</span>
							</p>
						</div>
					</div>
				</div>
				<div className={`${styles['map-wrapper']} ${styles['footer-item']}`}>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1334.0990536794573!2d38.77217126351192!3d9.021315565546686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856b6eb28e25%3A0x88fa30677d4fd38d!2sBusy%20Bees%20Addis!5e0!3m2!1sen!2set!4v1690442299034!5m2!1sen!2set'
						width='100%'
						height='100%'
						allowFullScreen
						className={styles.iframe}
						// style={{ display: 'initial' }}
					></iframe>
				</div>
				<ul
					className={`navbar-nav ${styles.navigation} ${styles['footer-item']}`}
				>
					<h4 className={`fw-semibold`}>Site Navigation</h4>
					{links.map((link, index) => (
						<li
							key={index}
							className={`nav-item me-1 ${styles['nav-item']} ${
								link === 'hero' ? 'd-none' : ''
							}`}
							onClick={() =>
								handleClick(`${link === 'contact'} ? 'footer' : ${link}`)
							}
						>
							<Link
								href={`#${link === 'contact' ? 'footer' : link}`}
								className={`nav-link border-start-0 border-end-0 ${
									activeNav === link || activeSection === link
										? styles.active
										: styles['menu__item']
								}`}
								// onClick={screenTest}
							>
								{link === 'program'
									? 'our program'
									: link === 'footer'
									? 'contact'
									: link}
							</Link>
						</li>
					))}
				</ul>
				<div className={`${styles['image-wrapper']} ${styles['footer-item']}`}>
					<Image
						alt='Hand waving bee illustration'
						src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${contactInfo.image}`}
						width={300}
						height={200}
						className={styles.hiBee}
					/>
				</div>
				<div
					className={`${styles['icons-and-copyright']} ${styles['footer-item']}`}
				>
					<Link className={`navbar-brand border-0 ${styles.brand}`} href='/'>
						<Image
							src={logo}
							alt='Busy Bees Addis Logo'
							className={styles.logo}
						/>
					</Link>
					<div className={styles.icons}>
						<a
							href={contactInfo.facebook}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faFacebookSquare}
								className={styles.facebook}
							/>
						</a>
						<a
							href={contactInfo.instagram}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className={styles.instagram}
							/>
						</a>
						<a
							href='https://busy-bees-addis-server.vercel.app/admin/'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.admin}
						>
							{' '}
							Admin Login
						</a>
					</div>
					<div className={styles.copyright}>
						<p>
							<FontAwesomeIcon icon={faCopyright} /> &nbsp;
							<span>2023 Busy Bees Addis. All rights reserved.</span>
						</p>
					</div>
				</div>
			</div>
		</AnimateContainer>
	)
}
