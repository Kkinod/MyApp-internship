import React, { createContext, useEffect, useState, ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import SearchInput from '../MaterialUI/SearchInput/SearchInput'
import ListItem from './ListItem/ListItem'
import LoadingButton from '../LoadingButton/LoadingButton'
import SideBar from '../SideBar/SideBar'
import ApiDefault from '../../api/api'

export interface IListItem {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export const UsersContext = createContext<IListItem>({} as IListItem)

const ListWrapper = () => {
	const [searchContent, setSearchInputContent] = useState<string>('')
	const [users, setUsers] = useState<IListItem[]>([])
	const [usersFiltered, setUsersFiltered] = useState<IListItem[]>([])

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

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInputContent(e.target.value)
	}

	useEffect(() => {
		setUsersFiltered(
			users.filter(
				user =>
					user.first_name.toLowerCase().includes(searchContent.toLowerCase()) ||
					user.email.toLowerCase().includes(searchContent.toLowerCase())
			)
		)
	}, [searchContent, users])

	return (
		<div className='main'>
			<SideBar />
			<div className='wrapper'>
				<SearchInput onChange={handleInputChange} />
				<div className='users-list__container'>
					<ul className='users-list'>
						{totalPages >= 1 ? (
							users.length ? (
								usersFiltered.map(({ id, avatar, first_name, last_name, email }: IListItem) => {
									return (
										<UsersContext.Provider key={id} value={{ id, email, first_name, last_name, avatar }}>
											<ListItem />
										</UsersContext.Provider>
									)
								})
							) : (
								<LoadingButton />
							)
						) : (
							<LoadingButton />
						)}
					</ul>
				</div>
				<Pagination count={totalPages} onChange={(e, page) => setPage(page)} data-testid='pagination' />
			</div>
		</div>
	)
}

export default ListWrapper
