import React from 'react'
import {connect} from 'react-redux'
import Preloader from '../Preloader/Preloader'
import Users from './Users'
import {
	followUser,
	unfollowUser,
	getUsers
} from '../../redux/users-reducer'

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
		users				: state.usersPage.users,
		pageSize			: state.usersPage.pageSize,
		totalUsersCount		: state.usersPage.totalUsersCount,
		currentPage			: state.usersPage.currentPage,
		isFetching			: state.usersPage.isFetching,
		isFollowingProgress	: state.usersPage.isFollowingProgress
	}
}

export default connect( mapStateToProps, {
	followUser,
	unfollowUser,
	getUsers
} )( UsersContainer )