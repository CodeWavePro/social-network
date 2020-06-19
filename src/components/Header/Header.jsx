import React from 'react'
import logo from './../../inc/img/logo-min.png'
import s from './Header.module.scss'

const Header = ( props ) => {
    return (
        <header className = {s.header}>
        	<div className = {s['header-logo']}>
        		<img className = {s['header-logo__img']} src = {logo} alt = "Социальная сеть" />
        	</div>
        </header>
    )
}

export default Header