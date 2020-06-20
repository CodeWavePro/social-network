import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Users from './components/Users/Users'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App() {
    return (
        <div className = "app-wrapper">
            <div className = "container">
                <Header />
                <Sidebar />

                <div className = "main">
                    <Route exact path = "/" render = {() => (
                        <Redirect to = "/profile" />
                    )} />
                    <Route path = "/profile" render = {
                        () => <Profile />
                    } />
                    <Route path = "/dialogs" render = {
                        () => <Dialogs />
                    } />
                    <Route path = "/users" render = {
                        () => <Users />
                    } />
                    <Route path = "/news" component = {News} />
                    <Route path = "/music" component = {Music} />
                    <Route path = "/settings" component = {Settings} />
                </div>

                <Footer /></div>
        </div>
    )
}

export default App
