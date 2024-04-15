'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import styles from '@/styles/team.module.css'

type TeamProps = {
	id: number
	name: string
	position: string
	image: string
	about: string
}

export default function Team({ team }: { team: TeamProps[] }) {
	const [readMore, setReadMore] = useState(false)
	const [id, setId] = useState(0)
	return (
		<section id='team' className={`${styles.team}`}>
			<div className={styles['heading-wrapper']}>
				<h1 className={`${playfairDisplayItalic.className} ${styles.heading}`}>
					Meet The Team
				</h1>
				<div className={styles.line}></div>
			</div>
			<Row xs={1} md={2} xl={3} className={`g-3 ${styles.grid}`}>
				{team.map(member => (
					<Col key={member.id} className=''>
						<Card
							className={`border-0 ${readMore ? 'h-auto' : 'h-100'} ${
								styles.card
							}`}
						>
							<div className={`text-center py-2 ${styles['image-container']}`}>
								{member.name.includes('Worknesh') ? (
									<Image
										alt={member.name}
										src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${member.image}`}
										width={210}
										height={210}
										style={{ borderRadius: '50%' }}
									/>
								) : (
									<CldImage
										alt={member.name}
										width='210'
										height='210'
										src={member.image.split('upload/')[1]}
										crop={'fill'}
										style={{ borderRadius: '50%' }}
									/>
								)}
							</div>
							<Card.Body className={`${styles['card-body']}`}>
								<Card.Title className={`${styles.title} ${raleway.className} `}>
									{member.name}
								</Card.Title>
								<Card.Title
									className={`text-muted ${styles.position} ${playfairDisplayItalic.className} `}
								>
									{member.position}
								</Card.Title>
								<Card.Text
									className={`text-black ${styles.description} ${raleway.className}`}
								>
									{readMore && id === member.id
										? member.about
										: member.about.substring(0, 175) + '...'}
									<span>
										<button
											onClick={() => {
												setReadMore(!readMore)
												setId(member.id)
											}}
											className={styles.read}
										>
											{readMore && id === member.id
												? 'read less ▲'
												: 'read more ▼'}
										</button>
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	)
}
