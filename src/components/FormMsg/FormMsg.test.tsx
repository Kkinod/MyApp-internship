import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormMsg from './FormMsg'

describe('Testing if the information "required" is shown when the inputs is empty', () => {
	it("Display 'Required' when input 'Title' is empty", async () => {
		render(<FormMsg name='' />)

		const input = screen.getByPlaceholderText('Title')
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText(/Required/i)).not.toBe(null)
			expect(screen.getByText(/Required/i)).toBeInTheDocument()
		})
	})

	it("Display 'Required' when input 'Message' is empty", async () => {
		render(<FormMsg name='' />)

		const input = screen.getByPlaceholderText('Message')
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText(/Required/i)).not.toBe(null)
			expect(screen.getByText(/Required/i)).toBeInTheDocument()
		})
	})
})
