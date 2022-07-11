import React from 'react'
import { Field, useField } from 'formik'

interface ListItemType {
	label: string
	as?: string
	className?: string
	name: string
	type: string
	placeholder: string
}

export const CustomTextInput = ({ label, ...props }: ListItemType) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}></label>
			<Field {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</>
	)
}
