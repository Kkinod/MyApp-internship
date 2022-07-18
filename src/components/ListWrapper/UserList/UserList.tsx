import React, { ChangeEvent, createContext, useEffect, useState } from 'react'
import LoadingButton from '../../MaterialUI/LoadingButton/LoadingButton'
import SearchInput from '../../MaterialUI/SearchInput/SearchInput'
import ListItem from '../ListItem/ListItem'
import { IListItem } from '../ListWrapper'

export const UsersContext = createContext<IListItem>({} as IListItem)

const UserList = ({ users }: { users: IListItem[] }) => {
	const [searchContent, setSearchInputContent] = useState<string>('')
	const [usersFiltered, setUsersFiltered] = useState<IListItem[]>([])

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
		<div className='users-list__container'>
			<SearchInput onChange={handleInputChange} />
			<div className='users-list'>
				{users.length ? (
					usersFiltered.map(({ id, avatar, first_name, last_name, email }: IListItem) => {
						return (
							<UsersContext.Provider key={id} value={{ id, email, first_name, last_name, avatar }}>
								<ListItem />
							</UsersContext.Provider>
						)
					})
				) : (
					<LoadingButton />
				)}
			</div>
		</div>
	)
}

export default UserList
