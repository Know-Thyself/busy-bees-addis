'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Map, {
	Marker,
	Popup,
	NavigationControl,
	GeolocateControl,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { IoMdAirplane } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

import styles from '@/styles/map.module.css'

type MarkerProps = {
	lat: number
	lng: number
	url: string
	google_map_view: string
	flyTo: object | any
	current: object | any
}

export default function Mapbox() {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
	const [selectedMarker, setSelectedMarker] = useState({
		lat: 9.0218,
		lng: 38.77265,
		url: 'https://busybeesaddis.com/',
		google_map_view:
			'https://www.google.com/maps/place/Busy+Bees+Addis/@9.021425,38.772717,16z/data=!4m14!1m7!3m6!1s0x164b856b6eb28e25:0x88fa30677d4fd38d!2sBusy+Bees+Addis!8m2!3d9.0214255!4d38.7727174!16s%2Fg%2F11v61nl2q1!3m5!1s0x164b856b6eb28e25:0x88fa30677d4fd38d!8m2!3d9.0214255!4d38.7727174!16s%2Fg%2F11v61nl2q1?hl=en&entry=ttu',
	})
	const mapRef = useRef(null)

	// const zoomToSelectedLoc = (e: any, location: object | any) => {
	// 	e.stopPropagation()
	// 	setSelectedMarker(location)
	// 	mapRef.current.flyTo({ center: [location.lng, location.lat], zoom: 17 })
	// }

	return (
		<main className={styles.mainStyle}>
			<Map
				ref={mapRef}
				mapboxAccessToken={mapboxToken}
				mapStyle='mapbox://styles/mapbox/streets-v12'
				style={{ width: '100%', height: '500px' }}
				initialViewState={{
					latitude: selectedMarker.lat,
					longitude: selectedMarker.lng,
					zoom: 15,
				}}
				maxZoom={20}
				minZoom={3}
			>
				<GeolocateControl position='top-left' />
				<NavigationControl position='top-left' />
				<Marker longitude={selectedMarker.lng} latitude={selectedMarker.lat}>
					<div className='cursor-pointer'>
						<FaLocationDot
							size={30}
							color='tomato'
							// onClick={e => zoomToSelectedLoc(e, selectedMarker)}
						/>
					</div>
				</Marker>
				{selectedMarker ? (
					<Popup
						offset={25}
						latitude={selectedMarker.lat}
						longitude={selectedMarker.lng}
						// onClose={() => {
						// 	setSelectedMarker({lat: 0, lng: 0})
						// }}
						closeButton={false}
					>
						<h3 className={styles.popupTitle}>{'Busy Bees Addis'}</h3>
						<div className={styles.popupInfo}>
							<a
								href={selectedMarker.google_map_view}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.popupWebUrl}
							>
								Google Map View
							</a>
						</div>
					</Popup>
				) : null}
			</Map>
		</main>
	)
}
