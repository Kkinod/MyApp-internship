// import React from 'react'
// import ListItem from './ListItem/ListItem'

// const ListWrapper = () => {
// 	return (
// 		<ul className='ulList'>
// 			<ListItem />
// 		</ul>
// 	)
// }

// export default ListWrapper

import React, { useEffect, useState } from 'react'
import ListItem from './ListItem/ListItem'

interface IListItem {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

const ListWrapper = () => {
	const URL = 'https://reqres.in/api/users/'

	const [users, setUsers] = useState<IListItem[]>([])
	const usersList = async () => {
		const res = await fetch(URL)
		const json = await res.json()
		setUsers(json.data)
	}
	useEffect(() => {
		usersList()
	}, [])

	return (
		<ul className='ulList'>
			{users.length &&
				users.map(user => {
					return <ListItem key={user.id} {...user} />
				})}
		</ul>
	)
}

export default ListWrapper
