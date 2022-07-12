import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
// import { IListItem } from '../ListWrapper/ListWrapper'
import './stylesSideBar.css'
import { Avatar, Typography } from '@mui/material'

// interface IShiba {
// 	data: string
// }

const SideBar = () => {
	const [shibes, setShibes] = useState<string>()

	const reff = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const URL = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'

		const shibeImg = async () => {
			const res = await axios.get(URL)

			if (!(res.status === 200)) {
				const msg = `USER NOT FOUND: ${res.status}`
				throw alert(msg)
			}
			setShibes(res.data)
		}

		const element = reff.current

		if (null !== element) {
			element.addEventListener('click', shibeImg)

			return () => {
				element.removeEventListener('click', shibeImg)
			}
		}

		// fetch(URL)
		// 	.then(res => res.json())
		// 	.then(data => console.log(data))
		// 	.then(data2 => {
		// 		setShibes(data2)
		// 	})

		shibeImg()
	}, [])

	return (
		<div className='side-bar__container'>
			<Typography gutterBottom variant='h5' component='div' color='white'>
				SHIBA
			</Typography>

			<Avatar alt='Remy Sharp' src={shibes} sx={{ width: 120, height: 120 }} className='avatar' />
			<button ref={reff}>Abc</button>
		</div>
	)
	// return (
	// 	<div className='side-bar__container'>
	// 		<div className='side-bar'>
	// 			<img src={shibes} alt='' className='side-bar__img'/>
	// 		</div>
	// 	</div>
	// )
}

export default SideBar
