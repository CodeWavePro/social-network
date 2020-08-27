import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer'
import s from './Profile.module.scss'

const Profile = ( props ) => {
    return (
        <div className = {s.profile}>
        	<ProfileInfo	profile = { props.profile }
        					status = { props.status }
        					updateStatus = { props.updateStatus } />
        	<ProfilePostsContainer />
        </div>
    )
}

export default Profile