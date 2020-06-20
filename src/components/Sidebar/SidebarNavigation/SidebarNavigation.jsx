import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './SidebarNavigation.module.scss'

const SidebarNavigation = ( props ) => {
    return (
        <nav className = {s['sidebar-navigation']}>
        	<ul className = {s['sidebar-navigation-menu']}>
        		<li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/profile">Мой профиль</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/dialogs">Сообщения</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/users">Пользователи</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/news">Новости</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/music">Моя музыка</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']} to = "/settings">Настройки</NavLink>
        		</li>
        	</ul>
        </nav>
    )
}

export default SidebarNavigation