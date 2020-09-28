import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

// Authorization constants.
const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA'

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

export const authMe = () => async ( dispatch ) => {
	let response = await authAPI.authMe()
    
    if ( response.data.resultCode === 0 ) {
    	let { id, login, email } = response.data.data
        dispatch( setAuthUserData( id, email, login, true ) )
    }
}

export const login = ( email, password, rememberMe = false ) => async ( dispatch ) => {
	let response = await authAPI.login( email, password, rememberMe )

    if ( response.data.resultCode === 0 ) {
        dispatch( authMe() )
    }	else {
    	let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка'
    	dispatch( stopSubmit(
    		'login',
    		{
    			_error: errorMessage
    		}
    	) )
    }
}

export const logout = () => async ( dispatch ) => {
	let response = await authAPI.logout()

    if ( response.data.resultCode === 0 ) {
        dispatch( setAuthUserData( null, null, null, false ) )
    }
}