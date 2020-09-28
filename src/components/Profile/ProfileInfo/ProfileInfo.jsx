import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import avatar from './../../../inc/img/avatar-min.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = ( { profile, status, updateStatus } ) => {
	if ( !profile ) {
		return <Preloader />
	}

	return (
		<div className = { s.info }>
			<h1 className = { s.name }>
				{ profile.fullName }
			</h1>

			<img	className = { s.avatar }
					src = { profile.photos.large ? profile.photos.large : avatar }
					alt = { profile.fullName } />

			<div className = { s.fields }>
				<ProfileStatusWithHooks status = { status } updateStatus = { updateStatus } />

				<div className = { s.field }>
					<span className = { s.bold }>В поисках работы:</span>
					<span className = { s.value }>
						{ profile.lookingForAJob ? 'Да' : 'Нет' }
					</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Описание для работодателя:</span>
					<span className = { s.value }>
						{
							profile.lookingForAJobDescription
								? profile.lookingForAJobDescription
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
									if ( ! profile.contacts.facebook
										&& ! profile.contacts.github
										&& ! profile.contacts.instagram
										&& ! profile.contacts.mainLink
										&& ! profile.contacts.twitter
										&& ! profile.contacts.vk
										&& ! profile.contacts.website
										&& ! profile.contacts.youtube ) {
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