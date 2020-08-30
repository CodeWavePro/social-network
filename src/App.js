import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { initializeApp } from './redux/app-reducer'

import Preloader from './components/Preloader/Preloader'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if ( ! this.props.initialized ) {
            return <Preloader />
        }

        return (
            <div className = "app-wrapper">
                <div className = "container">
                    <HeaderContainer />
                    <Sidebar />

                    <div className = "main">
                        <Route path = "/dialogs" render = {
                            () => <DialogsContainer />
                        } />
                        <Route path = "/profile/:userId?" render = {
                            () => <ProfileContainer />
                        } />
                        <Route path = "/users" render = {
                            () => <UsersContainer />
                        } />
                        <Route path = "/news" component = { News } />
                        <Route path = "/music" component = { Music } />
                        <Route path = "/settings" component = { Settings } />
                        <Route path = "/login" render = {
                            () => <Login />
                        } />
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

let mapStateToProps = ( state ) => ( {
    initialized: state.app.initialized
} )

export default compose(
    withRouter,
    connect( mapStateToProps, { initializeApp } )
)( App )