import { createStore, combineReducers } from 'redux'
import authReducer from './auth-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers( {
	auth		: authReducer,
	profilePage	: profileReducer,
	dialogsPage	: dialogsReducer,
	sidebar		: sidebarReducer,
	usersPage	: usersReducer
} )

let store = createStore( reducers )

export default store