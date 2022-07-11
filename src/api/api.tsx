import axios from 'axios'

const ApiDefault = (URL: string) => {
	return axios
		.get(URL)
		.then(response => {
			return response
		})
		.catch(error => {
			return error
		})
}

export default ApiDefault
