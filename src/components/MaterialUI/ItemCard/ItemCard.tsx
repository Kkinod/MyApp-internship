import React, { useContext } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { UsersContext } from '../../ListWrapper/ListWrapper'

const ItemCard = () => {
	const { avatar, first_name, email } = useContext(UsersContext)

	return (
		<Card sx={{ maxWidth: 250 }} className='card'>
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
	)
}
// interface IUserProps {
// 	email: string
// 	first_name: string
// 	avatar: string
// }

// const ItemCard = ({ avatar, first_name, email }: IUserProps) => {
// 	return (
// 		<Card sx={{ maxWidth: 250 }} className='card'>
// 			<CardMedia component='img' alt='User img' height='250' image={avatar} />
// 			<CardContent>
// 				<Typography gutterBottom variant='h5' component='div'>
// 					{first_name}
// 				</Typography>
// 				<Typography variant='body2' color='text.secondary'>
// 					{email}
// 				</Typography>
// 			</CardContent>
// 			<CardActions>
// 				<Button variant='contained' size='small'>
// 					Details
// 				</Button>
// 			</CardActions>
// 		</Card>
// 	)
// }

export default ItemCard
