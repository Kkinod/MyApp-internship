import React from 'react'
import Card from '../../MaterialUI/ItemCard/ItemCard'

interface IUserProps {
	email: string
	first_name: string
	avatar: string
}

const ListItem = (props: IUserProps) => {
	return (
		<li className='liItem'>
			<Card {...props} />
		</li>
	)
}

export default ListItem
