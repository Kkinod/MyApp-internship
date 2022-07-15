import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import ApiDefault from '../../api/api'
import UserList from './UserList/UserList'
import Paginationn from './Pagination/Paginationn'

export interface IListItem {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

const ListWrapper = () => {
	const [users, setUsers] = useState<IListItem[]>([])
	const [totalPages, setPages] = useState(0)
	const [page, setPage] = useState(1)
	const URL = `https://reqres.in/api/users?page=${page}`

	useEffect(() => {
		ApiDefault(URL).then(res => {
			setUsers(res.data.data)
			setPages(res.data.total_pages)
			setPage(res.data.page)
		})
	}, [page, URL])

	return (
		<div className='main'>
			<SideBar />
			<div className='wrapper'>
				<ul className='users-list'>
					<UserList users={users} />
				</ul>
				<Paginationn totalPages={totalPages} setPage={setPage} />
			</div>
		</div>
	)
}

export default ListWrapper
