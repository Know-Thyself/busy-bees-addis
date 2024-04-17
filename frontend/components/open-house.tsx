'use client'

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
} from '@/styles/fonts'
import AnimateCharacters from '@/animations/character-animation'
import styles from '@/styles/open.module.css'

type OpenHouseImagesProps = {
	id: number
	open_house_image: string
	caption: string
}

type RegisterProps = {
	id: number
	title: string
	subtitle: string
	requirements: string
}


export default function OpenHouse({
	open_house_images,
	register,
}: {
	open_house_images: OpenHouseImagesProps[]
	register: RegisterProps
}) {
	let registerObj: object | any = register
	registerObj = registerObj[0]
	
	return (
		<div>
			<div className={styles['heading-wrapper']}>
				<AnimateCharacters
					text='Open House Photos Gallery'
					x={40}
					el='h1'
					rotateX={180}
					// rotateY={180}
					delay={0.5}
					duration={1}
					className={`${styles.heading} ${playfairDisplayItalic.className}`}
				/>
				<div className={styles.line}></div>
			</div>
			<div id='open-house' className={styles.gallery}>
				{open_house_images.map(image => (
					<figure key={image.id} className={styles['gallery-item']}>
						<Image
							alt={image.caption}
							src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${image.open_house_image}`}
							width={360}
							height={300}
							className={styles['gallery-img']}
						/>
					</figure>
				))}
			</div>
			<div className={styles.registration}>
				<div className={styles['heading-wrapper']}>
					<h1
						className={`${playfairDisplayItalic.className} ${styles.heading}`}
					>
						{registerObj.title}
					</h1>
					<div className={styles.line}></div>
				</div>

				<h3 className={`${playfairDisplay.className} ${styles.title}`}>
					{registerObj.subtitle}
				</h3>
				<ol className={`${raleway.className}`}>
					{registerObj.requirements
						.split('\r\n')
						.map((requirement: string, index: number) => (
							<li key={index}>{requirement.replace('/', ' / ')}</li>
						))}
				</ol>
			</div>
		</div>
	)
}
