import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'

const LoadingBtn = () => {
	const noUserTxt = 'User Not Found'

	return (
		<LoadingButton loading loadingPosition='start' startIcon={<SaveIcon />} variant='outlined'>
			{noUserTxt}
		</LoadingButton>
	)
}

export default LoadingBtn
