import React from 'react'
import {connect} from 'react-redux'
import Dialogs from './Dialogs'

import {onNewDialogsMessageTextChangeAC, sendNewDialogsMessageAC} from '../../redux/dialogs-reducer'

const mapStateToProps = ( state ) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		onNewDialogsMessageTextChange: ( newMessageText ) => {
			dispatch( onNewDialogsMessageTextChangeAC( newMessageText ) )
		},
		sendNewDialogsMessage: () => {
			dispatch( sendNewDialogsMessageAC() )
		}
	}
}
const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs )
export default DialogsContainer