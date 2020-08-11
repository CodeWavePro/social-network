import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.scss'

const DialogItem = ( props ) => {
	return (
		<NavLink className = {s['dialogs-list__item']}
				 activeClassName = {s.active}
				 to = {'/dialogs/' + props.id}>
			{props.name}
		</NavLink>
	)
}

const MessageItem = ( props ) => {
	return (
		<div className = {s.message}>
			{props.messageText}
		</div>
	)
}

const Dialogs = ( props ) => {
	let dialogs = props.dialogsPage.dialogsData.map( d => <DialogItem key = {d.id} name = {d.name} id = {d.id} /> )
	let messages = props.dialogsPage.messagesData.map( m => <MessageItem key = {m.id} messageText = {m.messageText} /> )

	let onNewDialogsMessageTextChange = ( e ) => {
		let newMessageText = e.target.value
		props.onNewDialogsMessageTextChange( newMessageText )
	}

	let sendNewDialogsMessage = () => {
		props.sendNewDialogsMessage()
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
				<textarea	className = {'textarea ' + s.textarea}
							value = {props.dialogsPage.newMessageText}
							onChange = {onNewDialogsMessageTextChange}
							placeholder = "Введите новое сообщение"></textarea>
				<div className = {s['button-wrapper']}>
					<button className = {'button ' + s.button} onClick = {sendNewDialogsMessage}>Отправить</button>
				</div>
			</div>
		</div>
    )
}

export default Dialogs