import React from 'react'
import {
	faComments,
	faBullhorn,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
	oswald,
	concertOne,
} from '@/styles/fonts'
import styles from '@/styles/features.module.css'

type FeatureProps = {
	id: number
	title: string
	description: string
	icon_name: string
}

export default function Features({ features }: { features: FeatureProps[] }) {
	return (
		<div>
			<h3 className={`${styles.heading} ${playfairDisplay.className}`}>Features</h3>
			<CardGroup>
				{features.map((feature, index) => (
					<Card
						className={`border-0 ${styles.card} ${
							feature.icon_name.includes('comments')
								? styles.comments
								: feature.icon_name.includes('bullhorn')
								? styles.bullhorn
								: feature.icon_name.includes('users')
								? styles.users
								: ''
						}`}
					>
						{/* <Card.Img variant='top' src='holder.js/100px160' /> */}
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
						{/* <Card.Footer>
							<small className='text-muted'>Last updated 3 mins ago</small>
						</Card.Footer> */}
					</Card>
				))}
			</CardGroup>
		</div>
	)
}
