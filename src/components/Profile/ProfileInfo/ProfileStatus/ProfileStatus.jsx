import React, { Component } from 'react'
import s from './ProfileStatus.module.scss'

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status	: this.props.status
	}

	activateEditMode = () => {
		this.setState( { editMode: true } )
	}

	deactivateEditMode = () => {
		this.setState( { editMode: false } )
		this.props.updateStatus( this.state.status )
	}

	onStatusChange = ( e ) => {
		this.setState( { status: e.currentTarget.value } )
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( prevProps.status !== this.props.status ) {
			this.setState( { status: this.props.status } )
		}
	}

	render() {
		return (
			<div className = { s.status }>
				{
					! this.state.editMode
						?	<h4 className = { s['status-text'] } onClick = { this.activateEditMode }>
								{ this.props.status ? this.props.status : 'Статус пока не указан.' }
							</h4>
						:	<input	type = "text"
									className = { s.status__input }
									value = { this.state.status }
									autoFocus = { true }
									onBlur = { this.deactivateEditMode }
									onChange = { this.onStatusChange } />
				}
			</div>
		)
	}
}

export default ProfileStatus