import { connect } from 'react-redux'
import { compose } from 'redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendNewDialogsMessageAC } from '../../redux/dialogs-reducer'

const mapStateToProps = ( state ) => {
	return {
		dialogsPage	: state.dialogsPage
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		sendNewDialogsMessage: ( newMessageText ) => {
			dispatch( sendNewDialogsMessageAC( newMessageText ) )
		}
	}
}

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	withAuthRedirect
)( Dialogs )