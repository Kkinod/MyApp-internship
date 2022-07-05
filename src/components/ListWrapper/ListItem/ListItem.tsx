import React from 'react'
// import Card from '../../MaterialUI/ItemCard/ItemCard'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'


const ListItem = (props: {name: string, email: string, avatar: string}) => {
	return (
		<li className='liItem'>
			<Card sx={{ maxWidth: 250 }}>
				<CardMedia component='img' alt='User img' height='250' image={props.avatar} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.email}
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
