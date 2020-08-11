import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
	_state: {
		profilePage: {
			postsData: [
			    {id: 1, name: 'Andrei Stezenko', postText: 'Олололо', likesCount: 3},
			    {id: 2, name: 'Andrei Stezenko', postText: 'Трололо', likesCount: 1},
			    {id: 3, name: 'Andrei Stezenko', postText: 'ОЛОЛОЛОЛОЛОЛОЛО', likesCount: 7}
			],
			newPostText: ''
		},

		dialogsPage: {
			dialogsData: [
			    {id: 1, name: 'Вася'},
			    {id: 2, name: 'Петя'},
			    {id: 3, name: 'Саша'},
			    {id: 4, name: 'Серёжа'}
			],
			messagesData: [
			    {id: 1, messageText: 'Привяу'},
			    {id: 2, messageText: 'Чё как'},
			    {id: 3, messageText: 'Алё'}
			],
			newMessageText: ''
		}
	},
	_callSubscriber() {
		console.log( 'State changed.' )
	},

	getState() {
		return this._state
	},
	subscribe( observer ) {
		this._callSubscriber = observer
	},

	dispatch( action ) {
		this._state.profilePage = profileReducer( this._state.profilePage, action )
		this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action )

		this._callSubscriber( this._state )
	}
}
export default store