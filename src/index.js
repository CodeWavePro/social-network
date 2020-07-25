import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import App from './App'
import store from './redux/store'

let reRenderEntireTree = ( state ) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state = { state } dispatch = { store.dispatch.bind( store ) } />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById( 'root' )
	)
}

reRenderEntireTree( store.getState() )
store.subscribe( reRenderEntireTree )
serviceWorker.unregister()
