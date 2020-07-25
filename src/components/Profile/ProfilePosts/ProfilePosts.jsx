import React from 'react'
import Post from './Post/Post'

import s from './ProfilePosts.module.scss'

const ProfilePosts = ( props ) => {
	let posts = props.profilePage.postsData.map( p => <Post key = {p.id} name = {p.name} postText = {p.postText} likesCount = {p.likesCount} /> )

	let newPostElement = React.createRef()

	let onNewPostTextChange = () => {
		let newText = newPostElement.current.value
		let action = {
			type: 'ON-NEW-POST-TEXT-CHANGE',
			newPostText: newText
		}
		props.dispatch( action )
	}

	let addPost = () => {
		let action = { type: 'ADD-POST' }
		props.dispatch( action )
	}

	return (
		<div className = {s.posts}>
			<h2 className = {s.title}>
				Все записи Andrei Stezenko
			</h2>

			<div className = { s['add-post'] }>
				<textarea	className = "textarea"
							placeholder = "Введите новое сообщение"
							ref = { newPostElement }
							value = { props.profilePage.newPostText }
							onChange = { onNewPostTextChange } />
				<button className = "button"
						title = "Добавить новую запись"
						onClick = { addPost }>
					Добавить запись
				</button>
			</div>

			{posts}
		</div>
	)
}

export default ProfilePosts