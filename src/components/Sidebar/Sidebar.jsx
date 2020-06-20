import React from 'react'
import SidebarNavigation from './SidebarNavigation/SidebarNavigation'
import s from './Sidebar.module.scss'

const Sidebar = ( props ) => {
    return (
        <aside className = {s.sidebar}>
        	<SidebarNavigation />
        </aside>
    )
}

export default Sidebar