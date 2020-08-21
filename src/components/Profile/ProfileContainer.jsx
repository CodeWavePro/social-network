import React from 'react'
import { connect } from 'react-redux'	
import { withRouter, Redirect } from 'react-router-dom'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'
import { getProfileData } from './../../redux/profile-reducer'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId

		if ( !userId ) {
			userId = 2
		}

		this.props.getProfileData( userId )
	}

	componentDidUpdate( prevProps ) {
		let userId = this.props.match.params.userId

		if ( userId !== prevProps.match.params.userId ) {
			if ( !userId ) {
				userId = 2
			}
			
			this.props.getProfileData( userId )
		}
	}

	render = () => {
		if ( ! this.props.isAuth ) return <Redirect to = "/login" />
		
		return <div>
			{ this.props.isFetching ? <Preloader /> : null }
			<Profile { ...this.props } profile = { this.props.profile } />
		</div>
	}
}

let mapStateToProps = ( state ) => ( {
	profile		: state.profilePage.profile,
	isFetching	: state.profilePage.isFetching,
	isAuth		: state.auth.isAuth
} )

let WithURLDataContainerComponent = withRouter( ProfileContainer )

export default connect( mapStateToProps, { getProfileData } )( WithURLDataContainerComponent )