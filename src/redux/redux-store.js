import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import appReducer from './app-reducer'

let reducers = combineReducers( {
	auth		: authReducer,
	profilePage	: profileReducer,
	dialogsPage	: dialogsReducer,
	sidebar		: sidebarReducer,
	usersPage	: usersReducer,
	form		: formReducer,
	app			: appReducer
} )

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) )

export default store