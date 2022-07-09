// import React from 'react'

// import { Formik, Field, Form, FormikHelpers } from 'formik'
// import * as Yup from 'yup'

// interface Values {
// 	title: string
// 	email: string
// }

// const ReactEmail = ({ name }: { name: string }) => {
// 	return (
// 		<div>
// 			<h1>Contact {name}!</h1>
// 			<Formik
// 				initialValues={{
// 					firstName: '',
// 					textarea: '',
// 				}}
// 				validationSchema={Yup.object({
// 					firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
// 					textarea: Yup.string()
// 						.min(5, 'Must be 5 characters or more')
// 						.max(20, 'Must be 20 characters or less')
// 						.required('Required'),
// 				})}
// 				onSubmit={async (values, { setSubmitting }) => {
// 					await new Promise(r => setTimeout(r, 500))
// 					setSubmitting(false)
// 				}}>
// 				<Form>
// 					<label htmlFor='title'>Title</label>
// 					<Field id='title' name='title' placeholder='title' />

// 					<label htmlFor='textarea'>Message</label>
// 					<Field as='textarea' id='textarea' name='textarea' />

// 					<button type='submit'>Submit</button>
// 				</Form>
// 			</Formik>
// 		</div>
// 	)
// }

// export default ReactEmail

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, Field, useField, useFormikContext } from 'formik'
import * as Yup from 'yup'
import styled from '@emotion/styled'

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
			<input className='text-input' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}

const MyTextArea = ({ label, ...props }: IListItem) => {

	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<Field as='textarea' className='text-input' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}

// And now we can use these
const ReactEmail = ({ name }: { name: string }) => {
	return (
		<>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={{
					title: '',
					message: '',

				}}
				validationSchema={Yup.object({
					title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
					message: Yup.string()
						.min(3, 'Must be 3 characters or more')
						.max(20, 'Must be 20 characters or less')
						.required('Required'),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					await new Promise(r => setTimeout(r, 500))
					setSubmitting(false)
				}}>
				<Form>
					{/* <label htmlFor='title'>Title</label>
					<Field id='title' name='title' placeholder='title' />
					<label htmlFor='textarea'>Message</label>
					<Field as='textarea' id='textarea' name='textarea' />
					<button type='submit'>Submit</button> */}
					<MyTextInput label='Title' name='title' type='text' />
					<MyTextArea label='Message' name='message' type='text' />

					<button type='submit'>Submit</button>
				</Form>
			</Formik>
		</>
	)
}

export default ReactEmail
