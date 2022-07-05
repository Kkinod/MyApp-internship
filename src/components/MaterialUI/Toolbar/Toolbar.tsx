import * as React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function SearchAppBar() {
	const title = 'Meet ReqRes users!'
	const subTitle = 'Meet ReqRes users! Application created with free ReqRes API'

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						{title}
						<Typography variant='h6' component='div' gutterBottom>
							{subTitle}
						</Typography>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
