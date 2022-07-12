import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Avatar, Typography } from '@mui/material'
import './stylesSideBar.css'

const SideBar = () => {
	const [shibes, setShibes] = useState<string>()

	const reff = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const URL = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'
		const element = reff.current

		const shibeImg = async () => {
			const res = await axios.get(URL)

			if (!(res.status === 200)) {
				const msg = `USER NOT FOUND: ${res.status}`
				throw alert(msg)
			}
			setShibes(res.data)
		}

		if (null !== element) {
			element.addEventListener('click', shibeImg)

			return () => {
				element.removeEventListener('click', shibeImg)
			}
		}

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
}

export default SideBar
