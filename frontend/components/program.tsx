'use client'

import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import TypicalDay from './typical-day'
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'
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
			<TypicalDay day={day} />
		</section>
	)
}
