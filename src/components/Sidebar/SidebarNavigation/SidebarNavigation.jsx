import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './SidebarNavigation.module.scss'

const SidebarNavigation = ( props ) => {
    return (
        <nav className = {s['sidebar-navigation']}>
        	<ul className = {s['sidebar-navigation-menu']}>
        		<li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink to = "/profile">Мой профиль</NavLink>
        			<NavLink to = "/dialogs">Сообщения</NavLink>
        			<NavLink to = "/users">Пользователи</NavLink>
        			<NavLink to = "/news">Новости</NavLink>
        			<NavLink to = "/music">Моя музыка</NavLink>
        			<NavLink to = "/settings">Настройки</NavLink>
        		</li>
        	</ul>
        </nav>
    )
}

export default SidebarNavigation