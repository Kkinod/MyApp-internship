import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IListItem } from '../ListWrapper/ListWrapper'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import ReactEmail from '../Form/Form'

const UsersDetails = () => {
	const params = useParams()

	const [user, setUser] = useState<IListItem>()

	useEffect(() => {
		const URL = `https://reqres.in/api/users/${params.userID}`

		const usersList = async () => {
			const res = await axios.get(URL)

			if (!(res.status === 200)) {
				const msg = `USER NOT FOUND: ${res.status}`
				throw alert(msg)
			}
			setUser(res.data.data)
		}

		usersList()
	}, [params])

	return (
		<div className='wrapper-users-details'>
			{user && (
				<Card sx={{ maxWidth: 350 }} className='card'>
					<CardMedia component='img' alt='User img' height='250' image={user.avatar} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{user.first_name} {user.last_name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{user.email}
						</Typography>
					</CardContent>
					<ReactEmail name={user.first_name} />
				</Card>
			)}
            <Link to={'/'}>Back</Link>
		</div>
	)
}

export default UsersDetails
