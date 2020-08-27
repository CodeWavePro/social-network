// Dialogs page constants.
const SEND_NEW_DIALOGS_MESSAGE = 'SEND-NEW-DIALOGS-MESSAGE'

let initialState = {
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

const dialogsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SEND_NEW_DIALOGS_MESSAGE:
			let message = action.newMessageText

			if ( message !== '' ) {
				let newDialogsMessageObject = {
					id			: 4,
					messageText	: message
				}
				return {
					...state,
					messagesData	: [...state.messagesData, newDialogsMessageObject],
					newMessageText	: ''
				}
			}	else {
				return state
			}

		default:
			return state
	}
}
export default dialogsReducer

export const sendNewDialogsMessageAC = ( newMessageText ) => ( { type: SEND_NEW_DIALOGS_MESSAGE, newMessageText } )