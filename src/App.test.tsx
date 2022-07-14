import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('Shapshot test', () => {
	it('shapshot for App component', () => {
		const renderedComponent = renderer
			.create(
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>
			)
			.toJSON()
		expect(renderedComponent).toMatchSnapshot()
	})
})

it('Testing "Page not found"', () => {
	const badRoute = '/bad/route'

	render(
		<MemoryRouter initialEntries={[badRoute]}>
			<App />
		</MemoryRouter>
	)

	expect(screen.getByText(/Page not found/i)).toBeInTheDocument()
})
