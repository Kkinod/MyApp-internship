import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'
import { Typography } from '@mui/material'
import './stylesForm.css'

interface IListItem {
	label: string
	name: string
	type: string
}

const MyTextInput = ({ label, ...props }: IListItem) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input className='form__input' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}

const MyTextArea = ({ label, ...props }: IListItem) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<Field as='textarea' className='form__input form__input--textarea' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}

// And now we can use these
const ReactEmail = ({ name }: { name: string }) => {
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
					title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
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
						<MyTextInput label='Title' name='title' type='text' />
						<MyTextArea label='Message' name='message' type='text' />
					</div>
					<button type='submit' className='link'>
						Submit
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default ReactEmail
