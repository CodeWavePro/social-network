import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './SidebarNavigation.module.scss'

const SidebarNavigation = ( props ) => {
    return (
        <nav className = {s['sidebar-navigation']}>
        	<ul className = {s['sidebar-navigation-menu']}>
        		<li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/profile">Мой профиль</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/dialogs">Сообщения</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/users">Пользователи</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/news">Новости</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/music">Моя музыка</NavLink>
                </li>
                <li className = {s['sidebar-navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/settings">Настройки</NavLink>
        		</li>
        	</ul>
        </nav>
    )
}

export default SidebarNavigation