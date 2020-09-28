import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.scss'
import avatar from '../../inc/img/user-avatar-min.png'

let User = ( props ) => {
	return (
		<div className = { s.user }>
			<div className = { s.avatar }>
				<NavLink to = { '/profile/' + props.id }>
					<img	className = { s.avatar__img }
							src = { props.photo != null ? props.photo : avatar }
							alt = { props.name } />
				</NavLink>
			</div>

			<div className = { s['user-info'] }>
				<h3 className = { s.user__name }>
					{ props.name }
				</h3>

				<div className = { s['user-location'] }>
					City, Country
				</div>

				<div className = { s['user-status'] }>
					{ props.status ? props.status : 'Nothing is written here yet...' }
				</div>
			</div>

			<div className = {s['user-button']}>
				{
					props.followed
						?	<button	className = { 'button ' + s['button_user'] }
									disabled = { ( props.isFollowingProgress[0] === props.id ) ? 'disabled' : '' }
									onClick = {
        								() => {
        									props.unfollow( props.id )
        								} }>{
        									( props.isFollowingProgress[0] === props.id )
        										? 'Подождите...'
        										: 'Отписаться'
        								}
        					</button>
						:	<button className = { 'button ' + s['button_user'] }
									disabled = { ( props.isFollowingProgress[0] === props.id ) ? 'disabled' : '' }
									onClick = {
        								() => {
        									props.follow( props.id )
        								} }>{
        									( props.isFollowingProgress[0] === props.id )
        										? 'Подождите...'
        										: 'Подписаться'
        								}
        					</button>
				}
			</div>
		</div>
	)
}

export default User