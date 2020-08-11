import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Users from './Users'
import { setUsers, setTotalUsersCount, follow, unfollow, setCurrentPage, toggleIsFetching } from '../../redux/users-reducer'

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
			{
				withCredentials: true
			}
		).then( response => {
			this.props.toggleIsFetching( false )
			this.props.setUsers( response.data.items )
			this.props.setTotalUsersCount( response.data.totalCount )
		} )
	}

	onPageChanged = ( pagesNumber ) => {
		this.props.toggleIsFetching( true )

		axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}` )
			.then( response => {
				this.props.toggleIsFetching( false )
				this.props.setUsers( response.data.items )
			} )

		this.props.setCurrentPage( pagesNumber )
	}

	render = () => {
		return <div>
			{ this.props.isFetching ? <Preloader /> : null }

			<Users 	users = { this.props.users }
					totalUsersCount = { this.props.totalUsersCount }
					pageSize = { this.props.pageSize }
					currentPage = { this.props.currentPage }
					onPageChanged = { this.onPageChanged }
					follow = { this.props.follow }
					unfollow = { this.props.unfollow }
			/>
		</div>
	}
}

let mapStateToProps = ( state ) => {
	return {
		users			: state.usersPage.users,
		pageSize		: state.usersPage.pageSize,
		totalUsersCount	: state.usersPage.totalUsersCount,
		currentPage		: state.usersPage.currentPage,
		isFetching		: state.usersPage.isFetching
	}
}

export default connect( mapStateToProps, {
	setUsers, setTotalUsersCount, follow, unfollow, setCurrentPage, toggleIsFetching
} )( UsersContainer )