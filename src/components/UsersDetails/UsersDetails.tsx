import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IListItem } from '../ListWrapper/ListWrapper'

import FormMsg from '../FormMsg/FormMsg'

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
		<div className='wrapper users-details'>
			{user && (
				<div className='users-details__card'>
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
						<FormMsg name={user.first_name} />
					</Card>
				</div>
			)}
			<Link to={'/'} className='btn-backLink'>
				&larr; Back
			</Link>
		</div>
	)
}

export default UsersDetails
