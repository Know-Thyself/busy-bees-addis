'use client'

import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPhone,
	faMapLocationDot,
	faCopyright,
	faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'

import styles from '@/styles/typical-day.module.css'

type TypicalDayProps = {
	title: string
	reading_bee_image: string
	activities: string
}

export default function TypicalDay({ day }: { day: TypicalDayProps[] }) {
	return (
		<section className={styles.main}>
			<h1
				className={`${styles['activities-title']} ${playfairDisplayItalic.className}`}
			>
				{day[0].title.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
			</h1>
			<div className={styles['activities-grid-container']}>
				<AnimateContainer
					x={-100}
					delay={1}
					duration={2}
                    className={styles.animate}
				>
					<div className={styles['reading-bee-image-container']}>
						<CldImage
							width='300'
							height='200'
							src={day[0].reading_bee_image.split('upload/')[1]}
							crop={'fill'}
							alt='Reading bee'
							className={styles['reading-bee-image']}
						/>
					</div>
				</AnimateContainer>
				<AnimateContainer x={100} delay={1} duration={2}>
					<div className={styles.activities}>
						{day[0].activities
							.split('\r\n')
							.map((activity: string, index: number) => (
								<p key={index} className={styles.activity}>
									<FontAwesomeIcon
										icon={faSquareCheck}
										className={styles['fa-square-check']}
									/>
									{activity}
								</p>
							))}
					</div>
				</AnimateContainer>
			</div>
		</section>
	)
}
