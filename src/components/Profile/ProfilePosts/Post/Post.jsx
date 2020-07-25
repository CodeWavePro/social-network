import React from 'react'
import s from './Post.module.scss'
import avatar from './../../../../inc/img/avatar-min.png'

const Post = ( props ) => {
	return (
		<div className = {s.post}>
			<img className = {s.avatar} src = {avatar} alt = "Profile avatar" />
			<div className = {s.content}>
				<div className = {s.name}>
					{props.name}
				</div>
				<div className = {s.text}>
					{props.postText}
				</div>
				<div className = {s.likes}>
					<button className = {s.likes} title = "Likes count">
						{props.likesCount} Likes
					</button>
				</div>
			</div>
		</div>
	)
}

export default Post