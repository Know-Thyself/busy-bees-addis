'use client'

import Image from 'next/image'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import OpenHouse from './open-house'
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'
import styles from '@/styles/gallery.module.css'

type CompoundImagesProps = {
	id: number
	compound_image: string
	caption: string
}

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

export default function PhotoGallery({
	compound_images,
	open_house_images,
	register,
}: {
	compound_images: CompoundImagesProps[]
	open_house_images: OpenHouseImagesProps[]
	register: RegisterProps
}) {
	compound_images.sort((a, b) => b.id - a.id)
	
	return (
		<section id='gallery' className={styles['photo-galleries']}>
			<div className={styles['heading-wrapper']}>
				<h1 className={`${styles.heading} ${playfairDisplayItalic.className}`}>
					Compound Photos Gallery
				</h1>
				<div className={styles.line}></div>
			</div>
			<div className={styles.gallery}>
				{compound_images.map((image, index) => (
					<figure key={image.id} className={styles['gallery-item']}>
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
			<OpenHouse open_house_images={open_house_images} register={register} />
		</section>
	)
}
