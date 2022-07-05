import * as React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import sun from '../../../assets/img/sun.png'

const ImgMediaCard = () => {
	return (
		<Card sx={{ maxWidth: 250 }}>
			<CardMedia component='img' alt='User img' height='250' image={sun} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Kamil Pawełek
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Email: email@email.com
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

export default ImgMediaCard
