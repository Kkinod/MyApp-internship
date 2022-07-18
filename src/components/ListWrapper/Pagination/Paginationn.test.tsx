import React, { SetStateAction } from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import Paginationn from './Paginationn'

describe('Testing Pagination', () => {
	it('shapshot for Pagination', () => {
		const renderedComponent = renderer.create(<Paginationn totalPages={2} setPage={function (value: SetStateAction<number>): void {} } />).toJSON()
		expect(renderedComponent).toMatchSnapshot()
	})

	it('should render Pagination when total_pages > 0', async () => {
		const totalPages = {
			total_pages: 2,
		}

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(totalPages),
				status: 200,
			} as Response)
		)

		await act(async () => {
			render(
				<MemoryRouter>
					<Paginationn
						totalPages={totalPages.total_pages}
						setPage={function (value: SetStateAction<number>): void {}}
					/>
				</MemoryRouter>
			)
		})

		const inputElement = screen.getByTestId('pagination')
		expect(inputElement).toBeInTheDocument()
	})

	it('should not render Pagination (should render <div data-testid="custom-element">) when total_pages = 0', async () => {
		const totalPages = {
			total_pages: 0,
		}

		await act(async () => {
			render(
				<MemoryRouter>
					<Paginationn
						totalPages={totalPages.total_pages}
						setPage={function (value: SetStateAction<number>): void {}}
					/>
				</MemoryRouter>
			)
		})

		const inputElement: HTMLDivElement = screen.getByTestId('custom-element')
		expect(inputElement).toBeInTheDocument()
	})
})
