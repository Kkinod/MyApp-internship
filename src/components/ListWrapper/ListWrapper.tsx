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
//----------------------------

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import ListItem from './ListItem/ListItem'
// import Pagination from '@mui/material/Pagination'
// import LoadingButton from '@mui/lab/LoadingButton'

// interface IListItem {
// 	id: number
// 	email: string
// 	first_name: string
// 	last_name: string
// 	avatar: string
// }

// const ListWrapper = () => {
// 	const [users, setUsers] = useState<IListItem[]>([])
// 	const [totalPages, setPages] = useState<number>(0)
// 	const [page, setPage] = useState<number>(1)
// 	const URL = `https://reqres.in/api/users?page=${page}`

// 	const usersList = async () => {
// 		const res = await axios.get(URL)

// 		if (!(res.status === 200)) {
// 			const msg = `USERS NOT FOUND: ${res.status}`
// 			throw alert(msg)
// 		}

// 		setUsers(res.data.data)
// 		setPages(res.data.total_pages)
// 		setPage(res.data.page)
// 	}

// 	useEffect(() => {
// 		usersList()
// 	}, [page])

// 	return (
// 		<div className='container'>
// 			<ul className='ulList'>
// 				{totalPages >= 1 ? (
// 					users.length ? (
// 						users.map(user => {
// 							return <ListItem key={user.id} {...user} />
// 						})
// 					) : (
// 						<LoadingButton loading variant='outlined'>
// 							Loading
// 						</LoadingButton>
// 					)
// 				) : undefined}
// 			</ul>
// 			<Pagination count={totalPages} onChange={(e, page) => setPage(page)}></Pagination>
// 		</div>
// 	)
// }

// export default ListWrapper

import React, { createContext, useEffect, useState } from 'react'
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

export const UsersContext = createContext<IListItem>({
	id: 1,
	email: 'abc',
	first_name: 'name',
	last_name: 'name',
	avatar: 'url',
})

const ListWrapper = () => {
	const [users, setUsers] = useState<IListItem[]>([])
	const [totalPages, setPages] = useState(0)
	const [page, setPage] = useState(1)
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
	}

	useEffect(() => {
		usersList()
	}, [page])

	return (
		<div className='container'>
			<ul className='ulList'>
				{totalPages >= 1 ? (
					users.length ? (
						// users.map(user => {
						users.map(({ id, avatar, first_name, last_name, email }: IListItem) => {
							return (
								<UsersContext.Provider key={id} value={{ id, email, first_name, last_name, avatar }}>
									<ListItem />
								</UsersContext.Provider>
							)
						})
					) : (
						<LoadingButton loading variant='outlined'>
							Loading
						</LoadingButton>
					)
				) : undefined}
			</ul>

			<Pagination count={totalPages} onChange={(e, page) => setPage(page)}></Pagination>
		</div>
	)
}

export default ListWrapper
