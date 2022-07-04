// Komponenty prywatne

import React from 'react'
import Button from '@mui/material/Button'

const ListItem = () => {
	return (
		<li className='listItemStyle'>
			<img src='' />
			<div>
				<h3>Kamil Pawelek</h3>
				<p>Adres Email:</p>
				<Button variant='contained' size="small">Szczegóły</Button>
			</div>
		</li>
	)
}

export default ListItem
