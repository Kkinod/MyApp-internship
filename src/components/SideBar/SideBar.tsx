import React, { useEffect, useState, useRef } from 'react'
import { Avatar, Typography } from '@mui/material'
import ApiDefault from '../../api/api'
import './stylesSideBar.css'

const SideBar = () => {
	const [shibes, setShibes] = useState<string>()
	const reff = useRef<HTMLButtonElement>(null)

	const shibaTitle = 'Give a smile to shiba!'

	useEffect(() => {
		const URL = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'
		const element = reff.current

		const shibeImg = () => {
			ApiDefault(URL).then(res => {
				setShibes(res.data[0])
			})

			if (null !== element) {
				element.addEventListener('click', shibeImg)

				return () => {
					element.removeEventListener('click', shibeImg)
				}
			}
		}

		shibeImg()
	}, [])

	return (
		<div className='side-bar__container'>
			<div className='side-bar'>
				<Typography gutterBottom variant='h5' component='div' color='white'>
					{shibaTitle}
				</Typography>
				<Avatar alt='Shiba img' src={shibes} sx={{ width: 120, height: 120 }} className='avatar' data-testid='avatar' />
				<button ref={reff} className='link'>
					Get new shiba image
				</button>
			</div>
		</div>
	)
}

export default SideBar
