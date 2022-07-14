import React, { ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ListWrapper from './ListWrapper'

describe('Pagination element', () => {
	it('Renders Pagination element', () => {
		const { getByTestId } = render(<ListWrapper />)
		expect(getByTestId('pagination')).toBeInTheDocument()
	})



	it('Renders Pagination element2', () => {
		const { getByTestId } = render(<ListWrapper />)
		const ulUsers = screen.getByTestId('userList')
		fireEvent.change(ulUsers, { target: { totalPages: 1 } });

		expect(screen.getByText(/User Not Found/i)).toBeInTheDocument()
	})





	// it('checking if onChange is working', () => {
	//     // expect(getByTestId('pagination')).toBeInTheDocument()

	// 	// const value = 2
	// 	const handleChange = jest.fn()
	// 	// handleChange.mockImplementation(e => console.log('value is correct here', e.target.count))
	// 	handleChange.mockImplementation(e => {
	//         expect(e.target.count).toBe(3)
	//     })

	//     render(<ListWrapper />)
	//     const pagination = screen.getByTestId('pagination')

	//     fireEvent.change(pagination, { target: { count: 3 } });

	//     expect(handleChange).toHaveBeenCalled();
	// })



})


