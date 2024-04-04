import React from 'react'
import {
	faComments,
	faBullhorn,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { raleway, playfairDisplay } from '@/styles/fonts'
import styles from '@/styles/features.module.css'

type FeatureProps = {
	id: number
	title: string
	description: string
	icon_name: string
}

export default function Features({ features }: { features: FeatureProps[] }) {
	features.sort((a, b) => a.id - b.id)
	return (
		<div className={styles.main}>
			<h1 className={`${styles.heading} ${playfairDisplay.className}`}>
				Features
			</h1>
			<div className={styles.line}></div>
			<Row xs={1} md={1} xl={3} className='g-3'>
				{features.map((feature, index) => (
					<Col key={feature.id} className='m-0'>
						<Card
							className={`border-0 rounded-0 m-0 ${styles.card} ${
								feature.icon_name.includes('comments')
									? styles.comments
									: feature.icon_name.includes('bullhorn')
									? styles.bullhorn
									: feature.icon_name.includes('users')
									? styles.users
									: ''
							}`}
						>
							<div className={styles['icon-container']}>
								{feature.icon_name.includes('comments') ? (
									<FontAwesomeIcon icon={faComments} className={styles.icon} />
								) : feature.icon_name.includes('bullhorn') ? (
									<FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
								) : feature.icon_name.includes('users') ? (
									<FontAwesomeIcon icon={faUsers} className={styles.icon} />
								) : null}
							</div>
							<Card.Body>
								<Card.Title
									className={`${styles.title} ${playfairDisplay.className} `}
								>
									{feature.title}
								</Card.Title>
								<Card.Text
									className={`${styles.description} ${raleway.className}`}
								>
									{feature.description}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	)
}
