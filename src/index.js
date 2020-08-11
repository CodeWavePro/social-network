import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import './index.scss'
import store from './redux/redux-store'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store = { store }>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById( 'root' )
)

serviceWorker.unregister()