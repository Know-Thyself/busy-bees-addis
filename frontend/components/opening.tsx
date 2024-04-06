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

export default function OpenHouse({
	open_house_images,
}: {
	open_house_images: OpenHouseImagesProps[]
}) {
	return (
		<div id='gallery'>
			<h1 className={`${styles.heading} ${playfairDisplay.className}`}>
				Open House Photos Gallery
			</h1>
			<div className={styles.line}></div>
			<div className={styles.gallery}>
				{open_house_images.map((image, index) => (
					<figure key={image.id} className={styles['gallery-item']}>
						<Image
							alt={image.caption !== null ? image.caption : 'Compound Image'}
							src={image.open_house_image.split('/public')[1]}
							width={300}
							height={400}
							className={styles['gallery-img']}
						/>
					</figure>
				))}
			</div>
		</div>
	)
}
