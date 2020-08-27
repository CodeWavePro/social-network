import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import s from './Dialogs.module.scss'

const DialogItem = ( props ) => {
	return (
		<NavLink className = { s['dialogs-list__item'] }
				 activeClassName = { s.active }
				 to = { `/dialogs/${props.id}` }>
			{ props.name }
		</NavLink>
	)
}

const MessageItem = ( props ) => {
	return (
		<div className = { s.message }>
			{ props.messageText }
		</div>
	)
}

const AddMessageForm = props => {
	const { handleSubmit } = props

	return (
		<form id = "dialogs-send-message-form" className = {s.form} onSubmit = { handleSubmit( props.onSubmit ) }>
			<div className = { s['form-field'] }>
    			<Field	name = "newMessageText"
    					className = { 'textarea ' + s.textarea }
    					component = "textarea"
    					placeholder = "Введите новое сообщение" />
    		</div>
			<div className = { s['button-wrapper'] }>
				<button	className = { 'button ' + s.button }
						form = "dialogs-send-message-form"
						type = "submit">
					Отправить
				</button>
			</div>
		</form>
	)
}

const AddMessageReduxForm = reduxForm( { form: 'dialogs-add-message' } )( AddMessageForm )

const Dialogs = ( props ) => {
	if ( ! props.isAuth ) {
		return <Redirect to = "/login" />
	}

	let dialogs = props.dialogsPage.dialogsData.map( d => <DialogItem key = { d.id } name = { d.name } id = { d.id } /> )
	let messages = props.dialogsPage.messagesData.map( m => <MessageItem key = { m.id } messageText = { m.messageText } /> )

	const onFormSubmit = ( formData ) => {
		props.sendNewDialogsMessage( formData.newMessageText )
	}

    return (
    	<div>
	        <div className = {s.dialogs}>
	        	<div className = {s['dialogs-list']}>
					{dialogs}
				</div>

				<div className = {s.messages}>
					<div className = {s['messages-items']}>
						{messages}
					</div>
				</div>
	        </div>

	        <div className = {s['textarea-wrapper']}>
	        	<AddMessageReduxForm { ...props } onSubmit = { onFormSubmit } />
			</div>
		</div>
    )
}

export default Dialogs