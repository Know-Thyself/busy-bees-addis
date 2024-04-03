import Home from '@/components/home'

async function getIntro() {
	const res = await fetch('http://localhost:8000/intro')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getDayActivities() {
	const res = await fetch('http://localhost:8000/typical-day')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getFeatures() {
	const res = await fetch('http://localhost:8000/features')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function HomePage() {
	const intro = await getIntro()
	// const introObject = intro[0]

	const activities = await getDayActivities()
	activities.sort((a: object | any, b: object | any) => a.id - b.id)

	const features = await getFeatures()

	return <Home intro={intro} day={activities} features={features} />
}