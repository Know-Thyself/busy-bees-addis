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
				<h1 className={`${styles.heading} ${playfairDisplayItalic.className}`}>
					Open House Photos Gallery
				</h1>
				<div className={styles.line}></div>
			</div>
			<div className={styles.gallery}>
				{open_house_images.map(image => (
					<figure key={image.id} className={styles['gallery-item']}>
						{/* <Image
							alt={image.caption !== null ? image.caption : 'Compound Image'}
							src={image.open_house_image.split('/public')[1]}
							width={300}
							height={400}
							className={styles['gallery-img']}
						/> */}
						<Image
							alt={image.caption}
							src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${image.open_house_image}`}
							width={360}
							height={300}
							className={styles['gallery-img']}
						/>
						{/* {image.caption.includes('Welcoming') ||
						image.caption.includes('Kid playing') ? (
							<Image
								alt={image.caption}
								src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${image.open_house_image}`}
								width={300}
								height={200}
								className={styles['gallery-img']}
							/>
						) : (
							<CldImage
								alt={image.caption}
								width='380'
								height='300'
								src={image.open_house_image.split('upload/')[1]}
								crop={'fill'}
								className={styles['gallery-img']}
							/>
						)} */}
					</figure>
				))}
			</div>
			<section className={styles.registration}>
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
			</section>
		</div>
	)
}
