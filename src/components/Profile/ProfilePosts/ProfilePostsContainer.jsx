import { connect } from 'react-redux'
import ProfilePosts from './ProfilePosts'

import { addPost } from '../../../redux/profile-reducer'

const mapStateToProps = ( state ) => {
	return {
		profilePage: state.profilePage
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		addPost: ( newPostText ) => {
			dispatch( addPost( newPostText ) )
		}
	}
}
const ProfilePostsContainer = connect( mapStateToProps, mapDispatchToProps )( ProfilePosts )
export default ProfilePostsContainer