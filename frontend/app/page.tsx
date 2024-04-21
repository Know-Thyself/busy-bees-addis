import Home from '@/components/home'

async function getHero() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/hero')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getProgram() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/program')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getDayActivities() {
	const res = await fetch(
		'https://busy-bees-addis-server.vercel.app/typical-day'
	)

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
	const res = await fetch(
		'https://busy-bees-addis-server.vercel.app/compound-images'
	)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getOpenHouseImages() {
	const res = await fetch(
		'https://busy-bees-addis-server.vercel.app/open-house-images'
	)
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

async function getContactInfo() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/contact')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getRegister() {
	const res = await fetch('https://busy-bees-addis-server.vercel.app/register')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}


export default async function HomePage() {
	const hero = await getHero()

	const program = await getProgram()

	const activities = await getDayActivities()
	activities.sort((a: object | any, b: object | any) => a.id - b.id)

	const features = await getFeatures()

	const compoundImages = await getCompoundImages()

	const openHouseImages = await getOpenHouseImages()

	const team = await getTeam()

	const contactInfo = await getContactInfo()

	const register = await getRegister()

	return (
		<Home
			hero={hero}
			program={program}
			day={activities}
			features={features}
			compound_images={compoundImages}
			open_house_images={openHouseImages}
			team={team}
			contactInfo={contactInfo}
			register={register}
		/>
	)
}
