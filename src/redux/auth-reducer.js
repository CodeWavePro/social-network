import { authAPI } from '../api/api'

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
				...action.data,
				isAuth: true
			}

		default:
			return state
	}
}
export default authReducer

export const setAuthUserData = ( userId, email, login ) => ( { type: SET_AUTH_USER_DATA, data: { userId, email, login } } )

export const authMe = ( ) => {
	return ( dispatch ) => {
		authAPI.authMe().then( data => {
            // If user is logged in.
            if ( data.resultCode === 0 ) {
                dispatch( setAuthUserData( data.data.id, data.data.email, data.data.login ) )
            }
        } )
	}
}