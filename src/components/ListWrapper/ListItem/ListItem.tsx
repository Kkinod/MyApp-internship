import React from 'react'
// import Card from '../../MaterialUI/ItemCard/ItemCard'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

interface IUserProps {
	email: string
	first_name: string
	avatar: string
}

const ListItem = ({ avatar, first_name, email }: IUserProps) => {
	return (
		<li className='liItem'>
			<Card sx={{ maxWidth: 250 }}>
				<CardMedia component='img' alt='User img' height='250' image={avatar} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{first_name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{email}
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant='contained' size='small'>
						Details
					</Button>
				</CardActions>
			</Card>
		</li>
	)
}

export default ListItem
