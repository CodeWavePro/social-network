import { usersAPI } from '../api/api'

// Users page constants.
const SET_USERS						= 'SET-USERS'
const SET_TOTAL_USERS_COUNT			= 'SET-TOTAL-USERS-COUNT'
const FOLLOW						= 'FOLLOW'
const UNFOLLOW						= 'UNFOLLOW'
const SET_CURRENT_PAGE				= 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING			= 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS	= 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
	users				: [],
	pageSize			: 10,
	totalUsersCount		: 0,
	currentPage			: 1,
	isFetching			: true,
	isFollowingProgress	: [null, false]
}

const usersReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_USERS:
			return { ...state, users: [...action.users] }

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalCount }

		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if ( u.id === action.userID ) {
						return { ...u, followed: true }
					}
					return u
				} )
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if ( u.id === action.userID ) {
						return { ...u, followed: false }
					}
					return u
				} )
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				isFollowingProgress: [action.followId, action.isFollowingProgress]
			}

		default:
			return state
	}
}
export default usersReducer

export const setUsers = ( users ) => ( { type: SET_USERS, users } )
export const setTotalUsersCount = ( totalCount ) => ( { type: SET_TOTAL_USERS_COUNT, totalCount } )
export const follow = ( userID ) => ( { type: FOLLOW, userID } )
export const unfollow = ( userID ) => ( { type: UNFOLLOW, userID } )
export const setCurrentPage = ( currentPage ) => ( { type: SET_CURRENT_PAGE, currentPage } )
export const toggleIsFetching = ( isFetching ) => ( { type: TOGGLE_IS_FETCHING, isFetching } )
export const toggleIsFollowingProgress = ( followId, isFollowingProgress ) => ( { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, followId } )

export const getUsers = ( currentPage, pageSize ) => {
	return ( dispatch ) => {
		dispatch( toggleIsFetching( true ) )

		usersAPI.getUsers( currentPage, pageSize ).then( data => {
			dispatch( toggleIsFetching( false ) )
			dispatch( setUsers( data.items ) )
			dispatch( setTotalUsersCount( data.totalCount ) )
			dispatch( setCurrentPage( currentPage ) )
		} )
	}
}

export const followUser = ( userId ) => {
	return ( dispatch ) => {
		dispatch( toggleIsFollowingProgress( userId, true ) )

		usersAPI.followUser( userId ).then( data => {
			if ( data.resultCode === 0 ) {
				dispatch( follow( userId ) )
			}

			dispatch( toggleIsFollowingProgress( null, false ) )
		} )
	}
}

export const unfollowUser = ( userId ) => {
	return ( dispatch ) => {
		dispatch( toggleIsFollowingProgress( userId, true ) )

		usersAPI.unfollowUser( userId ).then( data => {
			if ( data.resultCode === 0 ) {
				dispatch( unfollow( userId ) )
			}

			dispatch( toggleIsFollowingProgress( null, false ) )
		} )
	}
}