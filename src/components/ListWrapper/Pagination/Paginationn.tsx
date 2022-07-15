import React from 'react'
import Pagination from '@mui/material/Pagination'

interface Props {
	totalPages: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginationn = ({ totalPages, setPage }: Props) => {
	return (
		<div className='abc'>
			{totalPages ? (
				<Pagination count={totalPages} onChange={(e, page) => setPage(page)} data-testid='pagination' />
			) : (
				<div data-testid='custom-element' aria-hidden='true' />
			)}
		</div>
	)
}

export default Paginationn
