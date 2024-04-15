import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPhone,
	faMapLocationDot,
	faCopyright,
	faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import styles from '@/styles/program.module.css'

type ProgramProps = {
	id: number
	title: string
	content: string
}

type TypicalDayProps = {
	title: string
	reading_bee_image: string
	activities: string
}

export default function Program({
	programResponse,
	day,
}: {
	programResponse: ProgramProps[]
	day: TypicalDayProps[]
}) {
	const left: string[] = []
	const right: string[] = []
	let program: object | any = programResponse
	program = program[0]
	program.content
		.split('\r\n')
		.forEach((paragraph: string, index: number) =>
			index <= 1 ? left.push(paragraph) : right.push(paragraph)
		)
	return (
		<section id='program' className={styles['program-section']}>
			<div className={styles['heading-wrapper']}>
				<h1 className={`${styles.heading} ${playfairDisplayItalic.className}`}>
					{program.title}
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
					<div className={styles['reading-bee-image-container']}>
						<CldImage
							width='300'
							height='200'
							src={day[0].reading_bee_image.split('upload/')[1]}
							crop={'fill'}
							alt='Reading bee'
							className={styles['reading-bee-image']}
						/>
					</div>
					<div className={styles.activities}>
						{day[0].activities
							.split('\r\n')
							.map((activity: string, index: number) => (
								<p key={index} className={styles.activity}>
									<FontAwesomeIcon
										icon={faSquareCheck}
										className={styles['fa-square-check']}
									/>
									{activity}
								</p>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}
