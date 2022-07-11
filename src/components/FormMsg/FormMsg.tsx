import React from 'react'
import { Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { CustomTextInput } from './Form/Form'
import './stylesForm.css'

const FormMsg = ({ name }: { name: string }) => {
	const textInput = 'Title'
	const textInputName = 'title'
	const textArea = 'Message'
	const textAreaName = 'message'
	const btnSubmit = 'Send message'

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
						<CustomTextInput
							label={textInput}
							name={textInputName}
							type='text'
							placeholder={textInput}
							className='form__input form__input--inputText'
						/>
						<CustomTextInput
							as='textarea'
							label={textArea}
							name={textAreaName}
							type='text'
							placeholder={textArea}
							className='form__input form__input--textArea'
						/>
					</div>
					<button type='submit' className='link'>
						{btnSubmit}
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default FormMsg
