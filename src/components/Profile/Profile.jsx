import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfilePosts from './ProfilePosts/ProfilePosts'
import s from './Profile.module.scss'

const Profile = ( props ) => {
    return (
        <div className = {s.profile}>
        	<ProfileInfo />
			<ProfilePosts />
        </div>
    )
}

export default Profile