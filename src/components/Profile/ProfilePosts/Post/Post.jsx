import React from 'react'
import s from './Post.module.scss'
import avatar from './../../../../inc/img/avatar-min.png'

let Post = ( props ) => {
	return (
		<div className = {s.post}>
			<img className = {s.avatar} src = {avatar} alt = "Profile avatar" />
			<div className = {s.content}>
				<div className = {s.name}>
					Andrei Stezenko
				</div>
				<div className = {s.text}>
					OLOLO
				</div>
				<div className = {s.likes}>
					<button className = {s.likes} title = "Likes count">14 Likes</button>
				</div>
			</div>
		</div>
	)
}

export default Post