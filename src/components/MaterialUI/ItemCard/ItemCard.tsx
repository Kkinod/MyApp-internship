import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Card, CardActions, CardContent, Typography } from '@mui/material'
import { UsersContext } from '../../ListWrapper/ListWrapper'

const ItemCard = () => {
	const { id, avatar, first_name, email } = useContext(UsersContext)
	const btnContent = 'Details'

	return (
		<Card sx={{ width: 200 }} className='card'>
			<div className='avatar-container'>
				<Avatar alt='Remy Sharp' src={avatar} sx={{ width: 104, height: 104 }} className='avatar' />
			</div>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div' className='typographyH5'>
					{first_name}
				</Typography>
				<Typography variant='body2' className='typographyB2'>
					{email}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={`/usersDetails/${id}`} className='link'>
					{btnContent}
				</Link>
			</CardActions>
		</Card>
	)
}

export default ItemCard
