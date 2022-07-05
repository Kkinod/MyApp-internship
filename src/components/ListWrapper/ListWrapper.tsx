// import React from 'react'
// import ListItem from './ListItem/ListItem'

// const ListWrapper = () => {
// 	return (
// 		<ul className='ulList'>
// 			<ListItem />
// 		</ul>
// 	)
// }

// export default ListWrapper

import React from 'react'
import ListItem from './ListItem/ListItem'

const ListWrapper = () => {
	const URL = 'https://reqres.in/api/users/'

	const [users, setUsers] = React.useState([])
	const usersList = async () => {
		const res = await fetch(URL)
		const json = await res.json()
		setUsers(json.data)
	}
	React.useEffect(() => {
		usersList()
	}, [])

	return (
		<ul className='ulList'>
			{users.length &&
				users.map(user => {
					return <ListItem key={user.id} avatar={user.avatar} name={user.first_name} email={user.email} />
				})}
		</ul>
	)
}

export default ListWrapper

// import React from 'react'
// import ListItem from './ListItem/ListItem'

// const ListWrapper = () => {
//  const URL = 'https://reqres.in/api/users/'

//  const [users, setUsers] = React.useState([])
//  const f = async () => {
//      const res = await fetch(URL)
//      const json = await res.json()
//      setUsers(json.data)
//  }
//  React.useEffect(() => {
//      f()
//  }, [])

//  return (
//      <ul className='ulList'>
//          <ListItem />
//          {users.map(user => {
//                  return <ListItem key={user.id} name={user.first_name} email={user.email} avatar={user.avatar} />
//              })}
//      </ul>
//  )
// }

// export default ListWrapper
