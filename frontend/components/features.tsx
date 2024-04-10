import React from 'react'
import {
	faComments,
	faBullhorn,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { raleway, playfairDisplay, playfairDisplayItalic } from '@/styles/fonts'
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
		<section id='features' className={styles.features}>
			<div className={styles['heading-wrapper']}>
				<h1 className={`${styles.heading} ${playfairDisplay.className}`}>
					Features
				</h1>
				<div className={styles.line}></div>
			</div>
			<Row xs={1} md={1} xl={3} className={`g-xs-3 g-xl-1 border-0 ${styles.grid}`}>
				{features.map((feature, index) => (
					<Col key={feature.id} className=''>
						<Card
							className={`border-0 rounded-0 ${styles.card} ${
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
									className={`${styles.description} ${playfairDisplayItalic.className}`}
								>
									{feature.description}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	)
}
