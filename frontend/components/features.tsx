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
import { raleway, playfairDisplayItalic, playfairDisplay } from '@/styles/fonts'
import AnimateContainer from '@/animations/container-animation'
import styles from '@/styles/features.module.css'

type FeatureProps = {
	id: number
	title: string
	description: string
	icon_name: string
}

export default function Features({
	features,
	active,
}: {
	features: FeatureProps[]
	active: string
}) {
	features.sort((a, b) => a.id - b.id)
	return (
		<section id='features' className={styles.features}>
			<AnimateContainer y={20} delay={0.4} duration={1} amount={0.3}>
				<div className={styles['heading-wrapper']}>
					<h1
						className={`${styles.heading} ${playfairDisplayItalic.className}`}
					>
						Features
					</h1>
					<div className={styles.line}></div>
				</div>
			</AnimateContainer>
			<Row
				xs={1}
				md={1}
				xl={3}
				className={`g-xs-3 g-xl-1 border-0 ${styles.grid}`}
			>
				{features.map((feature, index) => (
					<Col key={feature.id} className=''>
						<AnimateContainer
							x={index === 0 ? -100 : index === 2 ? 100 : 0}
							scale={index === 1 ? 0 : 1}
							delay={0.4}
							duration={1.5}
							once
							amount={0.2}
							type='spring'
							stiffness={20}
							className={styles.animate}
						>
							<Card
								className={`border-0 rounded-0 h-xl-100 ${styles.card} ${
									feature.icon_name.includes('comments')
										? styles.comments
										: feature.icon_name.includes('bullhorn')
										? styles.bullhorn
										: feature.icon_name.includes('users')
										? styles.users
										: ''
								}`}
							>
								<div className={`my-0 mb-0 mt-2 ${styles['icon-container']}`}>
									{feature.icon_name.includes('comments') ? (
										<FontAwesomeIcon
											icon={faComments}
											className={styles.icon}
										/>
									) : feature.icon_name.includes('bullhorn') ? (
										<FontAwesomeIcon
											icon={faBullhorn}
											className={styles.icon}
										/>
									) : feature.icon_name.includes('users') ? (
										<FontAwesomeIcon icon={faUsers} className={styles.icon} />
									) : null}
								</div>
								<Card.Body className='mt-0 pt-0'>
									<Card.Title
										className={`m-1 p-1 fs-2 fw-semibold ${styles.title}`}
									>
										{feature.title}
									</Card.Title>
									<Card.Text className={`${styles.description}`}>
										{feature.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</AnimateContainer>
					</Col>
				))}
			</Row>
		</section>
	)
}
