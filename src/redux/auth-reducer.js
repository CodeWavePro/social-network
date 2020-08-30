import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

// Authorization constants.
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState = {
	userId		: null,
	email		: null,
	login		: null,
	isAuth		: false,
	isFetching	: false
}

const authReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload
			}

		default:
			return state
	}
}
export default authReducer

export const setAuthUserData = ( userId, email, login, isAuth ) => (
	{
		type	: SET_AUTH_USER_DATA,
		payload	: {
			userId,
			email,
			login,
			isAuth
		}
	}
)

export const authMe = () => {
	return ( dispatch ) => {
		return authAPI.authMe().then( data => {
            if ( data.resultCode === 0 ) {
                dispatch( setAuthUserData( data.data.id, data.data.email, data.data.login, true ) )
            }
        } )
	}
}

export const login = ( email, password, rememberMe = false ) => {
	return ( dispatch ) => {
		authAPI.login( email, password, rememberMe ).then( data => {
            if ( data.resultCode === 0 ) {
                dispatch( authMe() )
            }	else {
            	let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Ошибка'
            	dispatch( stopSubmit(
            		'login',
            		{
            			_error: errorMessage
            		}
            	) )
            }
        } )
	}
}

export const logout = () => {
	return ( dispatch ) => {
		authAPI.logout().then( data => {
            if ( data.resultCode === 0 ) {
                dispatch( setAuthUserData( null, null, null, false ) )
            }
        } )
	}
}