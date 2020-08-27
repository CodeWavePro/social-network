import React from 'react'
import s from './FormControls.module.scss'

const FormControl = ( { input, meta, child, ...props } ) => {
	let hasError = meta.touched && meta.error

	return (
		<div className = { s['textarea-wrapper'] }>
			{ props.children }
			<div className = { s['error-text'] }>
				{ hasError && meta.error }
			</div>
		</div>
	)
}

export const Textarea = props => {
	const { input, meta, child, ...restProps } = props
	return <FormControl { ...props }><textarea { ...input } { ...restProps } /></FormControl>
}

export const Input = props => {
	const { input, meta, child, ...restProps } = props
	return <FormControl { ...props }><input { ...input } { ...restProps } /></FormControl>
}