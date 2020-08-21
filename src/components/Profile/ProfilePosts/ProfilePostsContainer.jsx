import {connect} from 'react-redux'
import ProfilePosts from './ProfilePosts'

import {onNewPostTextChange, addPost} from '../../../redux/profile-reducer'

const mapStateToProps = ( state ) => {
	return {
		profilePage: state.profilePage
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		onNewPostTextChange: ( newText ) => {
			dispatch( onNewPostTextChange( newText ) )
		},
		addPost: () => {
			dispatch( addPost() )
		}
	}
}
const ProfilePostsContainer = connect( mapStateToProps, mapDispatchToProps )( ProfilePosts )
export default ProfilePostsContainer