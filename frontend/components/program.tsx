'use client'

import {
	montserrat,
	raleway,
	playfairDisplay,
	playfairDisplayItalic,
} from '@/styles/fonts'
import AnimateContainer from '@/animations/container-animation'
import AnimateCharacters from '@/animations/character-animation'
import styles from '@/styles/program.module.css'

type ProgramProps = {
	id: number
	title: string
	content: string
}

export default function Program({
	programResponse,
}: {
	programResponse: ProgramProps[]
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
			<AnimateContainer y={100} delay={0.5} duration={1} amount={0.2}>
				<div className={styles['heading-wrapper']}>
					<h1
						className={`${styles.heading} ${playfairDisplayItalic.className}`}
					>
						{program.title}
					</h1>
					<div className={styles.line}></div>
				</div>
			</AnimateContainer>
			<AnimateContainer delay={1.5} duration={4} amount={0.2}>
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
			</AnimateContainer>
		</section>
	)
}
