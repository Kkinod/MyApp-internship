import React from 'react'
import ListWrapper from './components/ListWrapper/ListWrapper'
import Toolbar from './components/MaterialUI/Toolbar/Toolbar'

function App() {
	return (
		<div>
			<header className='App-header'>
				<Toolbar />
			</header>
			<ListWrapper />
		</div>
	)
}

export default App
