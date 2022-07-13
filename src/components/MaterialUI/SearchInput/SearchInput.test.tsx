import React, { ChangeEvent } from 'react'
import { fireEvent, render } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('Input Search', () => {
	it('Renders input element', () => {
		const { getByPlaceholderText } = render(
			<SearchInput onChange={function (e: ChangeEvent<HTMLInputElement>): void {}} />
		)
		expect(getByPlaceholderText(/Search…/i)).toBeInTheDocument()
	})

	it('Rendering of the value on the input element', () => {
		const { getByPlaceholderText } = render(
			<SearchInput onChange={function (e: ChangeEvent<HTMLInputElement>): void {}} />
		)
		const input = getByPlaceholderText(/Search…/i)

		fireEvent.change(input, { target: { value: 'Jane' } })
		expect(input.value).toEqual('Jane')
	})
})
