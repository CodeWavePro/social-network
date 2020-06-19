import React from 'react'
import SidebarNavigation from './SidebarNavigation/SidebarNavigation'
import s from './Sidebar.module.scss'

const Sidebar = ( props ) => {
    return (
        <aside className = {s.aside}>
        	<SidebarNavigation />
        </aside>
    )
}

export default Sidebar