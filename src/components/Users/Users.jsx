import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Users.module.scss'
import avatar from '../../inc/img/user-avatar-min.png'

let Users = ( props ) => {
	let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
	let pagesNumbers = []

	for ( let i = 1; i <= pagesCount; i++ ) {
		pagesNumbers.push( i )
	}

	return (
		<div className = { s['user-wrapper'] }>
				<div className = { s.pagination }>
					{
						pagesNumbers.map(
							p => <span	key = {p}
										className = { ( p === props.currentPage ) ? ( s.page + ' ' + s.current ) : s.page }
										onClick = { () => { props.onPageChanged( p ) } }>{p}</span>
						)
					}
				</div>

		        <div className = { s.users }>
		        	{
		        		props.users.map( u => <div key = { u.id } className = { s.user }>
		        				<div className = { s.avatar }>
		        					<NavLink to = { '/profile/' + u.id }>
		        						<img	className = { s.avatar__img }
			        							src = { u.photos.small != null ? u.photos.small: avatar }
			        							alt = { u.name } />
		        					</NavLink>
		        				</div>

		        				<div className = { s['user-info'] }>
		        					<h3 className = { s.user__name }>
		        						{ u.name }
		        					</h3>

		        					<div className = { s['user-location'] }>
		        						City, Country
		        					</div>

		        					<div className = { s['user-status'] }>
		        						{ u.status ? u.status : 'Nothing is written here yet...' }
		        					</div>
		        				</div>

		        				<div className = {s['user-button']}>
		        					{
		        						u.followed
		        							?	<button	className = { 'button ' + s['button_user'] }
		        										disabled = { ( props.isFollowingProgress[0] === u.id ) ? 'disabled' : '' }
		        										onClick = {
					        								() => {
					        									props.unfollow( u.id )
					        								} }>{
					        									( props.isFollowingProgress[0] === u.id )
					        										? 'Подождите...'
					        										: 'Отписаться'
					        								}
					        					</button>
		        							:	<button className = { 'button ' + s['button_user'] }
		        										disabled = { ( props.isFollowingProgress[0] === u.id ) ? 'disabled' : '' }
		        										onClick = {
					        								() => {
					        									props.follow( u.id )
					        								} }>{
					        									( props.isFollowingProgress[0] === u.id )
					        										? 'Подождите...'
					        										: 'Подписаться'
					        								}
					        					</button>
		        					}
		        				</div>
		        			</div>
		        		)
		        	}
		        </div>
		    </div>
	)
}

export default Users