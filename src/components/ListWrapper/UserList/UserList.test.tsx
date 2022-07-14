import React, { ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import UserList from './UserList'
import { MemoryRouter } from 'react-router-dom'

it('Shoot: display text "User Not Found" when users=[]', () => {
	render(<UserList users={[]} />)
	expect(screen.getByText(/User Not Found/i)).toBeInTheDocument()
})


