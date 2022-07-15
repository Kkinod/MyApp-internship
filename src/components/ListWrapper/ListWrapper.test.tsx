import React, { ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ListWrapper from './ListWrapper'
import renderer from 'react-test-renderer'

describe('Pagination element', () => {
	it('Renders Pagination element', () => {
		const { getByTestId } = render(<ListWrapper />)
		expect(getByTestId('pagination')).toBeInTheDocument()
	})

	it('shapshot for Pagination', () => {
		const renderedComponent = renderer.create(<ListWrapper />).toJSON()
		expect(renderedComponent).toMatchSnapshot()
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
