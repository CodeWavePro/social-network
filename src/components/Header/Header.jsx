import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from './../../inc/img/logo-min.png'
import s from './Header.module.scss'

const Header = ( props ) => {
    return (
        <header className = {s.header}>
        	<div className = {s['header-logo']}>
        		<img className = {s['header-logo__img']} src = {logo} alt = "Социальная сеть" />
        	</div>

        	<div className = { s.authorization }>
        		{
        			props.isAuth
        				? <div>{ props.login } - <button onClick = { props.logout }>Выйти</button></div>
        				: <NavLink className = { s.authorization__link } to = "/login">Войти</NavLink>
        		}
        	</div>
        </header>
    )
}

export default Header