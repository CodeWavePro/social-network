import React from 'react'
import { reduxForm, Field } from 'redux-form'
import Post from './Post/Post'
import s from './ProfilePosts.module.scss'
import Preloader from '../../Preloader/Preloader'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormControls/FormControls'

const maxLength300 = maxLengthCreator( 300 )

const ProfileAddPostForm = props => {
	const { handleSubmit } = props

	return (
		<form id = "add-post" className = { s['add-post'] } onSubmit = { handleSubmit( props.onSubmit ) }>
			<Field	name = "newPostText"
					className = "textarea"
					component = { Textarea }
					placeholder = "Добавить новую запись"
					validate = { [required, maxLength300] } />
			<button className = "button"
					title = "Добавить новую запись"
					type = "submit"
					form = "add-post">
				Добавить запись
			</button>
		</form>
	)
}

const ProfileAddPostReduxForm = reduxForm( { form: 'profile-add-post' } )( ProfileAddPostForm )

const ProfilePosts = props => {
	let posts = props.profilePage.postsData.map(
		p => <Post	key = { p.id }
					name = { p.name }
					postText = { p.postText }
					likesCount = { p.likesCount } />
	)

	const onFormSubmit = ( formData ) => {
		props.addPost( formData.newPostText )
	}

	return (
		<div className = { s.posts }>
			<h2 className = { s.title }>
				{
					props.profilePage.profile
						? 'Все записи ' + props.profilePage.profile.fullName
						: <Preloader />
				}
			</h2>

			<ProfileAddPostReduxForm { ...props } onSubmit = { onFormSubmit } />

			{ posts }
		</div>
	)
}

export default ProfilePosts