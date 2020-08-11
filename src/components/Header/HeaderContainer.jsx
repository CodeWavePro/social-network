import React from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'
import Header from './Header'
import {setAuthUserData} from './../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            }
        ).then( response => {
            // If user is logged in.
            if ( response.data.resultCode === 0 ) {
                this.props.setAuthUserData( response.data.data.id, response.data.data.email, response.data.data.login )
            }
        } )
    }

    render = () => {
        return <Header { ...this.props } />
    }
}

let mapStateToProps = ( state ) => {
    return {
        login   : state.auth.login,
        isAuth  : state.auth.isAuth
    }
}

export default connect( mapStateToProps, { setAuthUserData } )( HeaderContainer )