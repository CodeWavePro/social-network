import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import avatar from './../../../inc/img/avatar-min.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = ( props ) => {
	if ( !props.profile ) {
		return <Preloader />
	}

	return (
		<div className = { s.info }>
			<h1 className = { s.name }>
				{ props.profile.fullName }
			</h1>

			<img	className = { s.avatar }
					src = { props.profile.photos.large ? props.profile.photos.large : avatar }
					alt = { props.profile.fullName } />

			<div className = { s.fields }>
				<ProfileStatusWithHooks status = { props.status } updateStatus = { props.updateStatus } />

				<div className = { s.field }>
					<span className = { s.bold }>В поисках работы:</span>
					<span className = { s.value }>
						{ props.profile.lookingForAJob ? 'Да' : 'Нет' }
					</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Описание для работодателя:</span>
					<span className = { s.value }>
						{
							props.profile.lookingForAJobDescription
								? props.profile.lookingForAJobDescription
								: 'Отсутствует'
						}
					</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Контакты:</span>
					<span className = { s.value }>
						{
							(
								() => {
									if ( ! props.profile.contacts.facebook
										&& ! props.profile.contacts.github
										&& ! props.profile.contacts.instagram
										&& ! props.profile.contacts.mainLink
										&& ! props.profile.contacts.twitter
										&& ! props.profile.contacts.vk
										&& ! props.profile.contacts.website
										&& ! props.profile.contacts.youtube ) {
										return 'Отсутствуют'
									}
								}
							)()
						}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo