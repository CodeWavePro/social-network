import React from 'react'

import s from './ProfileInfo.module.scss'
import avatar from './../../../inc/img/avatar-min.png'

let ProfileInfo = ( props ) => {
	return (
		<div className = {s.info}>
			<h1 className = {s.name}>
				Andrei Stezenko
			</h1>
			<img className = {s.avatar} src = {avatar} alt = "Kira Kulebiakina" />
			<div className = {s.fields}>
				<div className = {s.field}>
					<span className = {s.bold}>День рождения:</span>
					<span className = {s.value}>25.06.1989</span>
				</div>
				<div className = {s.field}>
					<span className = {s.bold}>Город:</span>
					<span className = {s.value}>Горловка</span>
				</div>
				<div className = {s.field}>
					<span className = {s.bold}>Телефон:</span>
					<span className = {s.value}>+38(071)999-99-99</span>
				</div>
				<div className = {s.field}>
					<span className = {s.bold}>Школа:</span>
					<span className = {s.value}>Лицей №47 г. Горловка</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo