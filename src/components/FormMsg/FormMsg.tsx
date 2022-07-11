import React from 'react'
import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './stylesForm.css'

import { MyTextArea, MyTextInput } from './Form/Form'

const FormMsg = ({ name }: { name: string }) => {
	return (
		<>
			<Typography variant='h6' color='white'>
				Contact {name}!
			</Typography>

			<Formik
				initialValues={{
					title: '',
					message: '',
				}}
				validationSchema={Yup.object({
					title: Yup.string()
						.min(2, 'Must be 2 characters or more')
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					message: Yup.string()
						.min(3, 'Must be 3 characters or more')
						.max(40, 'Must be 40 characters or less')
						.required('Required'),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					await new Promise(r => setTimeout(r, 500))
					setSubmitting(false)
				}}>
				<Form className='form'>
					<div className='form__wrapper'>
						<MyTextInput label='Title' name='title' type='text' placeholder='Title' />
						<MyTextArea label='Message' name='message' type='text' placeholder='Message' />
					</div>
					<button type='submit' className='link'>
						Send message
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default FormMsg
