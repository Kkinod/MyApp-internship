import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListWrapper from './components/ListWrapper/ListWrapper'
import Demo from './components/DemoMUI/Demo'


function App() {
	return (
		<div className='App'>
			 <Demo />
			<header className='App-header'>
				<h1>Meet ReqRes users!</h1>
				<h2>Application created with free ReqRes API</h2>
			</header>
			<ListWrapper />
		</div>
	)
}

export default App
