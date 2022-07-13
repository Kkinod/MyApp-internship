import React, { ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('Input Search', () => {
	it('Renders input element 2', () => {
		const { getByPlaceholderText } = render(
			<SearchInput onChange={function (e: ChangeEvent<HTMLInputElement>): void {}} />
		)
		expect(getByPlaceholderText('Search…')).toBeInTheDocument()
	})

	it('Renders input element 2', () => {
		render(<SearchInput onChange={function (e: ChangeEvent<HTMLInputElement>): void {}} />)
		const input: HTMLInputElement = screen.getByPlaceholderText('Search…')
		fireEvent.change(input, { target: { value: 'Jane' } })
		expect(input.value).toEqual('Jane')
	})
})
