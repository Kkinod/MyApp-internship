import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListWrapper from './components/ListWrapper/ListWrapper'
import Toolbar from './components/MaterialUI/Toolbar/Toolbar'


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Toolbar />
			</header>
			<ListWrapper />
			
		</div>
	)
}

export default App
