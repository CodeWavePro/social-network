import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'
import { getProfileData, getStatus, updateStatus } from './../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId

		if ( !userId ) {
			userId = this.props.authorizedUserId
		}

		this.props.getProfileData( userId )
		this.props.getStatus( userId )
	}

	componentDidUpdate( prevProps ) {
		let userId = this.props.match.params.userId

		if ( userId !== prevProps.match.params.userId ) {
			if ( !userId ) {
				userId = this.props.authorizedUserId
			}
			
			this.props.getProfileData( userId )
		}
	}

	render = () => {		
		return <div>
			{ this.props.isFetching ? <Preloader /> : null }
			<Profile { ...this.props } />
		</div>
	}
}

let mapStateToProps = ( state ) => ( {
	profile			: state.profilePage.profile,
	isFetching		: state.profilePage.isFetching,
	status			: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth			: state.auth.isAuth
} )

export default compose(
	connect( mapStateToProps, { getProfileData, getStatus, updateStatus } ),
	withRouter,
	withAuthRedirect
)( ProfileContainer )