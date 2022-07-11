import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IListItem } from '../ListWrapper/ListWrapper'
import FormMsg from '../FormMsg/FormMsg'
import ApiDefault from '../../api/api'

const UsersDetails = () => {
	const params = useParams()
	const [user, setUser] = useState<IListItem>()
	const URL = `https://reqres.in/api/users/${params.userID}`

	useEffect(() => {
		ApiDefault(URL).then(res => {
			setUser(res.data.data)
		})
	}, [params, URL])

	return (
		<div className='wrapper-users-details'>
			{user && (
				<div className='container-card'>
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
