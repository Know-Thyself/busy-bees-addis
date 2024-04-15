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
import styles from '@/styles/compound.module.css'
type CompoundImagesProps = {
	id: number
	compound_image: string
	caption: string
}

export default function Compound({
	compound_images,
}: {
	compound_images: CompoundImagesProps[]
}) {
	compound_images.sort((a, b) => b.id - a.id)
	return (
		<section id='gallery'>
			<div className={styles['heading-wrapper']}>
				<h1 className={`${styles.heading} ${playfairDisplayItalic.className}`}>
					Compound Photos Gallery
				</h1>
				<div className={styles.line}></div>
			</div>
			<div className={styles.gallery}>
				{compound_images.map((image, index) => (
					<figure key={image.id} className={styles['gallery-item']}>
						{/* <CldImage
							alt={image.caption}
							width='360'
							height='300'
							src={image.compound_image.split('upload/')[1]}
							crop={'fill'}
							className={styles['gallery-img']}
						/> */}
						<Image
							alt={image.caption}
							src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${image.compound_image}`}
							width={360}
							height={300}
							className={styles['gallery-img']}
						/>
					</figure>
				))}
			</div>
		</section>
	)
}
