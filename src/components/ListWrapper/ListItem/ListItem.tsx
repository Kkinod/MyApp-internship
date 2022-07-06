// import React from 'react'
// import ItemCard from '../../MaterialUI/ItemCard/ItemCard'

// interface IUserProps {
// 	email: string
// 	first_name: string
// 	avatar: string
// }

// const ListItem = (props: IUserProps) => {
// 	return (
// 		<li className='liItem'>
// 			<ItemCard {...props} />
// 		</li>
// 	)
// }

// export default ListItem

import React from 'react'
import ItemCard from '../../MaterialUI/ItemCard/ItemCard'

// interface IUserProps {
// 	email: string
// 	first_name: string
// 	last_name: string
// 	avatar: string
// }

const ListItem = () => {
	return (
		<li className='liItem'>
			<ItemCard />
		</li>
	)
}

export default ListItem
