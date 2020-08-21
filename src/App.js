import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Login from './components/Login/Login'

import HeaderContainer from './components/Header/HeaderContainer'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = ( props ) => {
    return (
        <div className = "app-wrapper">
            <div className = "container">
                <HeaderContainer />
                <Sidebar />

                <div className = "main">
                    <Route path = "/login" render = {
                        () => <Login />
                    } />
                    <Route exact path = "/" render = {
                        () => <Redirect to = "/profile" />
                    } />
                    <Route path = "/profile/:userId?" render = {
                        () => <ProfileContainer />
                    } />
                    <Route path = "/dialogs" render = {
                        () => <DialogsContainer />
                    } />
                    <Route path = "/users" render = {
                        () => <UsersContainer />
                    } />
                    <Route path = "/news" component = { News } />
                    <Route path = "/music" component = { Music } />
                    <Route path = "/settings" component = { Settings } />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default App
