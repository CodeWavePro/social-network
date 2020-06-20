import React from 'react'
import Post from './Post/Post'

import s from './ProfilePosts.module.scss'

let ProfilePosts = ( props ) => {
	return (
		<div className = {s.posts}>
			<h2 className = {s.title}>
				Все записи Andrei Stezenko
			</h2>

			<div className = {s['add-post']}>
				<textarea className = "textarea" placeholder = "Введите новое сообщение" />
				<button className = "button" title = "Добавить новую запись">
					Добавить запись
				</button>
			</div>

			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default ProfilePosts