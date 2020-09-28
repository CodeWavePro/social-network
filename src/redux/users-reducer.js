import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

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
				users: updateObjectInArray( state.users, action.userID, 'id', { followed: true } )
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray( state.users, action.userID, 'id', { followed: false } )
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

export const getUsers = ( currentPage, pageSize ) => async ( dispatch ) => {
	dispatch( toggleIsFetching( true ) )
	let response = await usersAPI.getUsers( currentPage, pageSize )

	dispatch( toggleIsFetching( false ) )
	dispatch( setUsers( response.data.items ) )
	dispatch( setTotalUsersCount( response.data.totalCount ) )
	dispatch( setCurrentPage( currentPage ) )
}

export const followUser = ( userId ) => async ( dispatch ) => {
	let apiMethod = usersAPI.followUser.bind( usersAPI )
	let actionCreator = follow
	followUnfollowFlow( dispatch, userId, apiMethod, actionCreator )
}

export const unfollowUser = ( userId ) => async ( dispatch ) => {
	let apiMethod = usersAPI.unfollowUser.bind( usersAPI )
	let actionCreator = unfollow
	followUnfollowFlow( dispatch, userId, apiMethod, actionCreator )
}

const followUnfollowFlow = async ( dispatch, userId, apiMethod, actionCreator ) => {
	dispatch( toggleIsFollowingProgress( userId, true ) )
	let response = await apiMethod( userId )
	
	if ( response.data.resultCode === 0 ) {
		dispatch( actionCreator( userId ) )
	}

	dispatch( toggleIsFollowingProgress( null, false ) )
}