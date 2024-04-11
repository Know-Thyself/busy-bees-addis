'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
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
				<h1 className={`${playfairDisplay.className} ${styles.heading}`}>
					Meet The Team
				</h1>
				<div className={styles.line}></div>
			</div>
			{/* <Container fluid className='m-0 p-0'> */}
			<Row xs={1} md={2} xl={3} className={`g-3 ${styles.grid}`}>
				{team.map((member, index) => (
					<Col key={member.id} className=''>
						<Card
							className={`border-0 ${readMore ? 'h-auto' : 'h-100'} ${
								styles.card
							}`}
						>
							<div className={`text-center py-2 ${styles['image-container']}`}>
								<Image
									src={member.image.split('/public')[1]}
									alt={member.name}
									width={200}
									height={200}
									style={{ borderRadius: '50%' }}
								/>
							</div>
							<Card.Body className={`${styles['card-body']}`}>
								<Card.Title
									className={`text-black ${styles.title} ${playfairDisplay.className} `}
								>
									{member.name}
								</Card.Title>
								<Card.Title
									className={`text-dark ${styles.position} ${playfairDisplay.className} `}
								>
									{member.position}
								</Card.Title>
								<Card.Text
									className={`text-black ${styles.description} ${raleway.className}`}
								>
									{readMore && id === member.id
										? member.about
										: member.about.substring(0, 180) + '...'}
									{/* <ReactReadMoreReadLess
											charLimit={180}
											readMoreText={'Read more ▼'}
											readLessText={'Read less ▲'}
										>
											{member.about}
										</ReactReadMoreReadLess> */}
									<span
										onClick={() => {
											setReadMore(!readMore)
											setId(member.id)
										}}
										className={styles.read}
									>
										{readMore && id === member.id
											? 'read less ▲'
											: 'read more ▼'}
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* </Container> */}
		</section>
	)
}