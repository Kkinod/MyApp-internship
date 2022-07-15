import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import UserList from './UserList'

describe('Testing UserList', () => {
	it('should render empty list when user not found', async () => {
		const fakeUsers = {
			data: [
				{
					id: 3,
					email: 'emma.wong@reqres.in',
					first_name: 'Emma',
					last_name: 'Wong',
					avatar: 'https://reqres.in/img/faces/3-image.jpg',
				},
			],
			page: 2,
			per_page: 6,
			url: 'https://reqres.in/#support-heading',
			text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
			total: 12,
			total_pages: 2,
		}

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUsers),
				status: 200,
			} as Response)
		)

		await act(async () => {
			render(
				<MemoryRouter>
					<UserList users={fakeUsers.data} />
				</MemoryRouter>
			)
		})

		const elements = document.querySelectorAll('.liItem')
		expect(elements.length).toEqual(1)
		expect(elements[0].className).toEqual('liItem')

		const inputElement: HTMLInputElement = screen.getByPlaceholderText('Search…')
		fireEvent.change(inputElement, { target: { value: 'charles' } })

		const emptyElements = document.querySelector('.liItem')

		expect(emptyElements).toEqual(null)
	})

	it('display text "User Not Found" when users=[]', () => {
		render(<UserList users={[]} />)
		expect(screen.getByText(/User Not Found/i)).toBeInTheDocument()
	})
})
