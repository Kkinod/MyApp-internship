import React, { ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SideBar from './SideBar'

test('image should change after click', () => {
	render(<SideBar />)
	const avatarElement = screen.getByTestId('custom-element') as HTMLImageElement
	const avatarElementSrc = avatarElement.getAttribute('src')

	fireEvent.click(screen.getByText('Get new shiba image'))

	expect(avatarElement.src).not.toBe(avatarElementSrc)
})
