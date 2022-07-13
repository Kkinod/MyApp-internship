import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

it('shapshot for App component', () => {
	const renderedComponent = renderer.create(<App />).toJSON()
	expect(renderedComponent).toMatchSnapshot()
})
