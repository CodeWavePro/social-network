import React from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'	
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'
import {setUserProfileData, profileToggleIsFetching} from './../../redux/profile-reducer'

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.profileToggleIsFetching( true )
		let userId = this.props.match.params.userId

		if ( !userId ) {
			userId = 2
		}

		axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
			.then( response => {
				this.props.setUserProfileData( response.data )
				this.props.profileToggleIsFetching( false )
			} )
	}

	componentDidUpdate( prevProps ) {
		let userId = this.props.match.params.userId

		if ( userId !== prevProps.match.params.userId ) {
			this.props.profileToggleIsFetching( true )
			if ( !userId ) {
				userId = 2
			}

			axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
				.then( response => {
					this.props.setUserProfileData( response.data )
					this.props.profileToggleIsFetching( false )
				} )
		}
	}

	render = () => {
		return <div>
			{ this.props.isFetching ? <Preloader /> : null }
			<Profile { ...this.props } profile = { this.props.profile } />
		</div>
	}
}

let mapStateToProps = ( state ) => ( {
	profile			: state.profilePage.profile,
	isFetching		: state.profilePage.isFetching
} )

let WithURLDataContainerComponent = withRouter( ProfileContainer )

export default connect( mapStateToProps, {
	setUserProfileData, profileToggleIsFetching
} )( WithURLDataContainerComponent )