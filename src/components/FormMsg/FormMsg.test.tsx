import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import * as userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
// import { render, fireEvent, wait } from "@testing-library/react";

import FormMsg from './FormMsg'

test('rendering and submitting a basic Formik form', async () => {
	// const user = userEvent.setup()
	// const handleSubmit = jest.fn()
	// render(<FormMsg onSubmit={handleSubmit} />)
	// await user.type(screen.getByLabelText(/title/i), 'Hello')
	// await user.type(screen.getByLabelText(/message/i), 'How are you?')
	// // await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')
	// await user.click(screen.getByRole('button', { name: /submit/i }))
	// await waitFor(() =>
	// 	expect(handleSubmit).toHaveBeenCalledWith({
	// 		// email: 'john.dee@someemail.com',
	// 		title: 'Hello',
	// 		message: 'How are you?',
	// 	})
	// )
})
describe('Testing empty inputs', () => {
	it("Shoot: display 'Required' when input 'Title' is empty", async () => {
		const { getByLabelText, getByTestId } = render(<FormMsg name='' />)

		const input = screen.getByPlaceholderText('Title')
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText(/Required/i)).not.toBe(null)
			expect(screen.getByText(/Required/i)).toBeInTheDocument()
		})
	})

	it("Shoot: display 'Required' when input 'Message' is empty", async () => {
		const { getByLabelText, getByTestId } = render(<FormMsg name='' />)

		const input = screen.getByPlaceholderText('Message')
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText(/Required/i)).not.toBe(null)
			expect(screen.getByText(/Required/i)).toBeInTheDocument()
		})
	})
})
