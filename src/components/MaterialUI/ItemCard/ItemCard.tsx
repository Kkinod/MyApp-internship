import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import sun from '../../../assets/img/sun.png'

export default function ImgMediaCard() {
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
