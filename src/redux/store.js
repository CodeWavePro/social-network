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
			]
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
		switch ( action.type ) {
			case 'ADD-POST':
				let text = this._state.profilePage.newPostText

				if ( text != '' ) {
					let newPostObject = {
						id			: 4,
						name		: 'Andrei Stezenko',
						postText	: text,
						likesCount	: 0
					}
					this._state.profilePage.postsData.push( newPostObject )
					this._state.profilePage.newPostText = ''
					this._callSubscriber( this._state )
				}
				break

			case 'ON-NEW-POST-TEXT-CHANGE':
				this._state.profilePage.newPostText = action.newPostText
				this._callSubscriber( this._state )
				break
		}
	}
}

export default store