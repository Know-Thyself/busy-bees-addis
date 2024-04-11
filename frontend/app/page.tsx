import Home from '@/components/home'

async function getIntro() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/intro')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getDayActivities() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/typical-day')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getFeatures() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/features')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getCompoundImages() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/compound-images')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getOpenHouseImages() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/open-house-images')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getTeam() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/team')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getAddress() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/address')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function HomePage() {
	const intro = await getIntro()

	const activities = await getDayActivities()
	activities.sort((a: object | any, b: object | any) => a.id - b.id)

	const features = await getFeatures()

	const compoundImages = await getCompoundImages()

	const openHouseImages = await getOpenHouseImages()

	const team = await getTeam()

	const address = await getAddress()

	return (
		<Home
			intro={intro}
			day={activities}
			features={features}
			compound_images={compoundImages}
			open_house_images={openHouseImages}
			team={team}
			address={address}
		/>
	)
}
