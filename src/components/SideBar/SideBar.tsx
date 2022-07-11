import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { IListItem } from '../ListWrapper/ListWrapper'
import './stylesSideBar.css'
import { CardMedia } from '@mui/material'
import { Avatar, Card, CardActions, CardContent, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'

// interface IShiba {
// 	data: string
// }

const SideBar = () => {
	const [shibes, setShibes] = useState<string>()

	useEffect(() => {
		const URL = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'

		const usersList = async () => {
			const res = await axios.get(URL)

			if (!(res.status === 200)) {
				const msg = `USER NOT FOUND: ${res.status}`
				throw alert(msg)
			}
			console.log(res)
			setShibes(res.data)
		}

		// fetch(URL)
		// 	.then(res => res.json())
		// 	.then(data => console.log(data))
		// 	.then(data2 => {
		// 		setShibes(data2)
		// 	})

		usersList()
	}, [URL])

	return (
		<div className='side-bar__container'>
			<Typography gutterBottom variant='h5' component='div' color='white'>
				SHIBA
			</Typography>

			<Avatar alt='Remy Sharp' src={shibes} sx={{ width: 120, height: 120 }} className='avatar' />
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
