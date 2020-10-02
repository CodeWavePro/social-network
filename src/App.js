import React, { Component } from 'react'
import { Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/redux-store'

import { initializeApp } from './redux/app-reducer'

import Preloader from './components/Preloader/Preloader'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import HeaderContainer from './components/Header/HeaderContainer'

const ProfileContainer = React.lazy( () => import( './components/Profile/ProfileContainer' ) )
const DialogsContainer = React.lazy( () => import( './components/Dialogs/DialogsContainer' ) )
const UsersContainer = React.lazy( () => import( './components/Users/UsersContainer' ) )

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
                        <React.Suspense fallback = { <Preloader /> }>
                            <Route path = "/dialogs" render = {
                                () => <DialogsContainer />
                            } />
                            <Route path = "/profile/:userId?" render = {
                                () => <ProfileContainer />
                            } />
                            <Route path = "/users" render = {
                                () => <UsersContainer />
                            } />
                        </React.Suspense>

                        <Route exact path = "/" render = {
                            () => <Redirect to = "/news" />
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

let AppContainer = compose(
    withRouter,
    connect( mapStateToProps, { initializeApp } )
)( App )

const SocialNetworkApp = props => {
    return (
        <BrowserRouter>
            <Provider store = { store }>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetworkApp