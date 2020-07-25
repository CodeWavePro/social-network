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
	let dialogs = props.dialogsData.map( d => <DialogItem key = {d.id} name = {d.name} id = {d.id} /> )
	let messages = props.messagesData.map( m => <MessageItem key = {m.id} messageText = {m.messageText} /> )

    return (
        <div className = {s.dialogs}>
        	<div className = {s['dialogs-list']}>
				{dialogs}
			</div>

			<div className = {s.messeges}>
				<div className = {s['messages-items']}>
					{messages}
				</div>
			</div>
        </div>
    )
}

export default Dialogs