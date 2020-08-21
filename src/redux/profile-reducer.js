import { profileAPI } from '../api/api'

// Profile page constants.
const ADD_POST = 'ADD-POST'
const ON_NEW_POST_TEXT_CHANGE = 'ON-NEW-POST-TEXT-CHANGE'
const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA'
const PROFILE_TOGGLE_IS_FETCHING = 'PROFILE-TOGGLE-IS-FETCHING'

let initialState = {
	profile			: null,
	postsData		: [
	    {id: 1, name: 'Andrei Stezenko', postText: 'Олололо', likesCount: 3},
	    {id: 2, name: 'Andrei Stezenko', postText: 'Трололо', likesCount: 1},
	    {id: 3, name: 'Andrei Stezenko', postText: 'ОЛОЛОЛОЛОЛОЛОЛО', likesCount: 7}
	],
	newPostText		: '',
	isFetching		: false
}

const profileReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case ON_NEW_POST_TEXT_CHANGE:
			return {
				...state,
				newPostText: action.newPostText
			}

		case ADD_POST:			
			let text = state.newPostText

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

		default:
			return state
	}
}
export default profileReducer

export const onNewPostTextChange = ( newText ) => ( { type: ON_NEW_POST_TEXT_CHANGE, newPostText: newText } )
export const addPost = () => ( { type: ADD_POST } )
export const setUserProfileData = ( profile ) => ( { type: SET_USER_PROFILE_DATA, profile } )
export const profileToggleIsFetching = ( isFetching ) => ( { type: PROFILE_TOGGLE_IS_FETCHING, isFetching } )

export const getProfileData = ( userId ) => {
	return ( dispatch ) => {
		dispatch( profileToggleIsFetching( true ) )

		profileAPI.getData( userId ).then( data => {
			dispatch( setUserProfileData( data ) )
			dispatch( profileToggleIsFetching( false ) )
		} )
	}
}