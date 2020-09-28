import { profileAPI } from '../api/api'

// Profile page constants.
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA'
const PROFILE_TOGGLE_IS_FETCHING = 'PROFILE-TOGGLE-IS-FETCHING'
const SET_STATUS = 'SET-STATUS'

let initialState = {
	profile			: null,
	postsData		: [
	    {id: 1, name: 'Andrei Stezenko', postText: 'Олололо', likesCount: 3},
	    {id: 2, name: 'Andrei Stezenko', postText: 'Трололо', likesCount: 1},
	    {id: 3, name: 'Andrei Stezenko', postText: 'ОЛОЛОЛОЛОЛОЛОЛО', likesCount: 7}
	],
	newPostText		: '',
	isFetching		: false,
	status			: ''
}

const profileReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case ADD_POST:			
			let text = action.newPostText

			if ( text !== '' ) {
				let newPostObject = {
					id			: 4,
					name		: 'Andrei Stezenko',
					postText	: text,
					likesCount	: 0
				}
				return {
					...state,
					postsData: [...state.postsData, newPostObject],
					newPostText: ''
				}
			}	else {
				return state
			}

		case DELETE_POST:
			return {
				...state,
				postsData: state.postsData.filter(
					p => p.id !== action.postID
				)
			}

		case SET_USER_PROFILE_DATA:
			return {
				...state,
				profile: action.profile
			}

		case PROFILE_TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status
			}

		default:
			return state
	}
}
export default profileReducer

export const addPost = ( newPostText ) => ( { type: ADD_POST, newPostText } )
export const deletePost = ( postID ) => ( { type: DELETE_POST, postID } )
const setUserProfileData = ( profile ) => ( { type: SET_USER_PROFILE_DATA, profile } )
const profileToggleIsFetching = ( isFetching ) => ( { type: PROFILE_TOGGLE_IS_FETCHING, isFetching } )
const setStatus = ( status ) => ( { type: SET_STATUS, status } )

export const getProfileData = ( userId ) => async ( dispatch ) => {
	dispatch( profileToggleIsFetching( true ) )
	let response = await profileAPI.getData( userId )
	
	dispatch( setUserProfileData( response.data ) )
	dispatch( profileToggleIsFetching( false ) )
}

export const getStatus = ( userId ) => async ( dispatch ) => {
	dispatch( profileToggleIsFetching( true ) )
	let response = await profileAPI.getStatus( userId )
	
	dispatch( setStatus( response.data ) )
	dispatch( profileToggleIsFetching( false ) )
}

export const updateStatus = ( status ) => async ( dispatch ) => {
	dispatch( profileToggleIsFetching( true ) )

	let response = await profileAPI.updateStatus( status )

	if ( response.data.resultCode === 0 ) {
		dispatch( setStatus( status ) )
		dispatch( profileToggleIsFetching( false ) )
	}	else {
		console.error( 'UPDATING STATUS ERROR!!!' )
		dispatch( profileToggleIsFetching( false ) )
	}
}