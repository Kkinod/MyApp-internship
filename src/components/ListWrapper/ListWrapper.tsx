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
import LoadingButton from '@mui/lab/LoadingButton'

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

		if (!res.ok) {
			const msg = `USERS NOT FOUND: ${res.status}`
			throw new Error(msg)
		}
		const json = await res.json()
		setUsers(json.data)
	}

	useEffect(() => {
		usersList()
	}, [])

	return (
		<ul className='ulList'>
			<LoadingButton loading variant='outlined'>
				Submit
			</LoadingButton>
			{users.length &&
				users.map(user => {
					return <ListItem key={user.id} {...user} />
				})}
		</ul>
	)
}

export default ListWrapper
