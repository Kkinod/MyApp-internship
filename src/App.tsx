import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListWrapper from './components/ListWrapper/ListWrapper'
import Toolbar from './components/MaterialUI/Toolbar/Toolbar'
import UsersDetails from './components/UsersDetails/UsersDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
	return (
		<Router>
			<div>
				<Toolbar />
				<Routes>
					<Route path='/' element={<ListWrapper />} />
					<Route path='/usersDetails/:userID' element={<UsersDetails />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
