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

async function getCompoundImages() {
	const res = await fetch('http://localhost:8000/compound-images')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getOpenHouseImages() {
	const res = await fetch('http://localhost:8000/open-house-images')
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

	const compoundImages = await getCompoundImages()

	const openHouseImages = await getOpenHouseImages()

	return (
		<Home
			intro={intro}
			day={activities}
			features={features}
			compound_images={compoundImages}
			open_house_images={openHouseImages}
		/>
	)
}
