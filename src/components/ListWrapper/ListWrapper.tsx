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
import axios from 'axios'
import ListItem from './ListItem/ListItem'
import Pagination from '@mui/material/Pagination'
import LoadingButton from '@mui/lab/LoadingButton'

interface IListItem {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

const ListWrapper = () => {
	const [users, setUsers] = useState<IListItem[]>([])
	const [totalPages, setPages] = useState<number>(0)
	const [page, setPage] = useState<number>(1)
	const URL = `https://reqres.in/api/users?page=${page}`

	const usersList = async () => {
		const res = await axios.get(URL)

		if (!(res.status === 200)) {
			const msg = `USERS NOT FOUND: ${res.status}`
			throw alert(msg)
		}

		setUsers(res.data.data)
		setPages(res.data.total_pages)
		setPage(res.data.page)
		console.log(res.data)
	}

	useEffect(() => {
		usersList()
	}, [page])

	return (
		<ul className='ulList'>
			<div className='usersList'>
				{totalPages >= 1 ? (
					users.length ? (
						users.map(user => {
							return <ListItem key={user.id} {...user} />
						})
					) : (
						<LoadingButton loading variant='outlined'>
							Loading
						</LoadingButton>
					)
				) : undefined}
			</div>
			<Pagination count={totalPages} onChange={(e, page) => setPage(page)}></Pagination>
		</ul>
	)
}

export default ListWrapper
