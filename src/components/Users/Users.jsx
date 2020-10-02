import React from 'react'
import s from './Users.module.scss'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ( props ) => {
	return (
		<div className = { s['user-wrapper'] }>
				<Paginator	currentPage = { props.currentPage }
							totalUsersCount = { props.totalUsersCount }
							pageSize = { props.pageSize }
							onPageChanged = { props.onPageChanged }
							portionSize = "10" />

		        <div className = { s.users }>
		        	{
		        		props.users.map( u => <User key = { u.id }
		        									id = { u.id }
		        									photo = { u.photos.small }
		        									name = { u.name }
		        									status = { u.status }
		        									followed = { u.followed }
		        									isFollowingProgress = { props.isFollowingProgress }
		        									follow = { props.follow }
		        									unfollow = { props.unfollow } />
		        		)
		        	}
		        </div>
		    </div>
	)
}

export default Users