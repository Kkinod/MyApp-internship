import React from 'react'
import { Field, useField } from 'formik'

interface IListItem {
	label: string
	name: string
	type: string
	placeholder: string
}

export const MyTextInput = ({ label, ...props }: IListItem) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}></label>
			<input className='form__input form__input--inputText' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}

export const MyTextArea = ({ label, ...props }: IListItem) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}></label>
			<Field as='textarea' className='form__input form__input--textArea' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}
