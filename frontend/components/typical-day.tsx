'use client'

import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import {
	montserrat,
	raleway,
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
		<section className={`${styles.main} ${raleway.className}`}>
			<AnimateCharacters
				text={day[0].title.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
				x={100}
				el='h1'
				rotateX={180}
				// rotateY={180}
				delay={0.5}
				duration={1}
				className={`${styles['activities-title']}`}
			/>
			<div className={styles['activities-grid-container']}>
				<AnimateContainer
					x={-40}
					delay={0.4}
					duration={1}
					once
					className={styles['animate-activities']}
				>
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
				<AnimateContainer
					x={40}
					delay={0.4}
					duration={1}
					once
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
			</div>
		</section>
	)
}
