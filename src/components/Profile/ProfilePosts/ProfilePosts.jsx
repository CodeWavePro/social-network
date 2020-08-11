import React from 'react'
import Post from './Post/Post'
import s from './ProfilePosts.module.scss'

const ProfilePosts = ( props ) => {
	let posts = props.profilePage.postsData.map(
		p => <Post	key = { p.id }
					name = { p.name }
					postText = { p.postText }
					likesCount = { p.likesCount } />
	)

	let onNewPostTextChange = ( e ) => {
		let newText = e.target.value
		props.onNewPostTextChange( newText )
	}

	let addPost = () => {
		props.addPost()
	}

	return (
		<div className = { s.posts }>
			<h2 className = { s.title }>
				Все записи Andrei Stezenko
			</h2>

			<div className = { s['add-post'] }>
				<textarea	className = "textarea"
							placeholder = "Введите новое сообщение"
							value = { props.profilePage.newPostText }
							onChange = { onNewPostTextChange } />
				<button className = "button"
						title = "Добавить новую запись"
						onClick = { addPost }>
					Добавить запись
				</button>
			</div>

			{ posts }
		</div>
	)
}

export default ProfilePosts