import React, { useState, useEffect } from 'react'
import s from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = ( props ) => {
	let [editMode, setEditMode] = useState( false )
	let [status, setStatus] = useState( props.status )

	useEffect( () => {
		setStatus( props.status )
	}, [props.status] )

	const activateEditMode = () => {
		setEditMode( true )
	}

	const deactivateEditMode = () => {
		setEditMode( false )
		props.updateStatus( status )
	}

	const onStatusChanged = ( e ) => {
		setStatus( e.currentTarget.value )
	}

	return (
		<div className = { s.status }>
			{
				editMode
					?	<input	type = "text"
								className = { s.status__input }
								autoFocus = "true"
								onChange = { onStatusChanged }
								value = { status }
								onBlur = { deactivateEditMode } />
					:	<h4 className = { s['status-text'] } onDoubleClick = { activateEditMode }>
							{ status ? status : 'Статус пока не указан.' }
						</h4>
			}
		</div>
	)
}

export default ProfileStatusWithHooks