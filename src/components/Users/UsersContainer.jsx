import React from 'react'
import {connect} from 'react-redux'
import Preloader from '../Preloader/Preloader'
import Users from './Users'
import {
	followUser,
	unfollowUser,
	getUsers
} from '../../redux/users-reducer'
import {
	getUsersArray,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getIsFollowingProgress
} from '../../redux/users-selectors'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers( this.props.currentPage, this.props.pageSize )
	}

	onPageChanged = ( pagesNumber ) => {
		this.props.getUsers( pagesNumber, this.props.pageSize )
	}

	render = () => {
		return <div>
			{ this.props.isFetching ? <Preloader /> : null }

			<Users 	users = { this.props.users }
					totalUsersCount = { this.props.totalUsersCount }
					pageSize = { this.props.pageSize }
					currentPage = { this.props.currentPage }
					onPageChanged = { this.onPageChanged }
					follow = { this.props.followUser }
					unfollow = { this.props.unfollowUser }
					isFollowingProgress = { this.props.isFollowingProgress }
			/>
		</div>
	}
}

let mapStateToProps = ( state ) => {
	return {
		users				: getUsersArray( state ),
		pageSize			: getPageSize( state ),
		totalUsersCount		: getTotalUsersCount( state ),
		currentPage			: getCurrentPage( state ),
		isFetching			: getIsFetching( state ),
		isFollowingProgress	: getIsFollowingProgress( state )
	}
}

export default connect( mapStateToProps, {
	followUser,
	unfollowUser,
	getUsers
} )( UsersContainer )