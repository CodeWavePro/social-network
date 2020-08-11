import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import avatar from './../../../inc/img/avatar-min.png'

const ProfileInfo = ( props ) => {
	if ( !props.profile ) {
		return <Preloader />
	}

	return (
		<div className = { s.info }>
			<h1 className = { s.name }>
				{ props.profile.fullName }
			</h1>
			<img className = { s.avatar } src = { props.profile.photos.large ? props.profile.photos.large : avatar } alt = "Andrei Stezenko" />
			<div className = { s.fields }>
				<div className = { s.field }>
					<span className = { s.bold }>День рождения:</span>
					<span className = { s.value }>25.06.1989</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Город:</span>
					<span className = { s.value }>Горловка</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Телефон:</span>
					<span className = { s.value }>+38(071)999-99-99</span>
				</div>
				<div className = { s.field }>
					<span className = { s.bold }>Школа:</span>
					<span className = { s.value }>Лицей №47 г. Горловка</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo