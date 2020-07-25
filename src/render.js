import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {addPost, onNewPostTextChange} from './redux/state'

export let reRenderEntireTree = ( state ) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state = { state } addPost = { addPost } onNewPostTextChange = { onNewPostTextChange } />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById( 'root' )
	)
}
