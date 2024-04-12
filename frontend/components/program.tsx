import Image from 'next/image'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import styles from '@/styles/program.module.css'

interface Intro {
	intro: string[]
}

type TypicalDayProps = {
	title: string
	reading_bee_image: string
	activities: string[]
}

export default function Program({
	intro,
	day,
}: {
	intro: Intro
	day: TypicalDayProps[]
}) {
	const left: string[] = []
	const right: string[] = []
	const introOb: object | any = intro
	const introObject = introOb[0]
	introObject.program
		.split('\r\n')
		.forEach((paragraph: string, index: number) =>
			index <= 1 ? left.push(paragraph) : right.push(paragraph)
		)
	return (
		<section id='program' className={styles['program-section']}>
			<div className={styles['heading-wrapper']}>
				<h1
					className={`${styles.heading} ${playfairDisplayItalic.className}`}
				>
					{introObject.program_title}
				</h1>
				<div className={styles.line}></div>
			</div>
			<div className={styles.program}>
				<div className={styles.left}>
					{left.map((paragraph: string, index: number) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
				<div className={styles.right}>
					{right.map((paragraph: string, index: number) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
			<div className={styles['activities-section']}>
				<h1
					className={`${styles['activities-title']} ${playfairDisplayItalic.className}`}
				>
					{day[0].title.replace(/\b[a-z]/g, (x: string) => x.toUpperCase())}
				</h1>
				<div className={styles['activities-grid-container']}>
					{day.map((activity: object | any, index: number) =>
						activity.id === 1 ? (
							<div
								key={index}
								className={styles['reading-bee-image-container']}
							>
								<Image
									src={activity.reading_bee_image.split('/public')[1]}
									width={300}
									height={200}
									alt='Reading bee'
									className={styles['reading-bee-image']}
								/>
							</div>
						) : (
							<ul key={activity.id}>
								{activity.activities.map((act: string, index: number) => (
									<li key={index}>{act}</li>
								))}
							</ul>
						)
					)}
				</div>
			</div>
		</section>
	)
}
