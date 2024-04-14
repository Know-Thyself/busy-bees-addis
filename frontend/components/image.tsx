'use client'

import Image from 'next/image'

type ImagesProps = {
	id: number
	image: string
}

type ExamplesProps = {
	id: number
	title: string
	image: string
}

const normalizeSrc = (src: string) => (src[0] === '/' ? src.slice(1) : src)

export function cloudinaryLoader(src: string, width: number, quality: string) {
	const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
	return `https://res.cloudinary.com/${
		process.env.CLOUDINARY_CLOUD_NAME
	}/image/upload/${params.join(',')}/${normalizeSrc(src)}`
}

export default function Images({
	image,
	examples,
}: {
	image: ImagesProps[]
	examples: ExamplesProps[]
}) {
	return (
		<div>
			{image.map((photo: object | any, idx: number) => (
				<Image
					key={photo.id}
					src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${photo.image}`}
					alt='hi bee'
					width={300}
					height={200}
				/>
			))}
			<div>
				{examples.map((example: object | any, index: number) => (
					<div key={example.id}>
						<h1>{example.title}</h1>
						<Image
							src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${example.image}`}
							alt='hi bee'
							width={300}
							height={200}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
