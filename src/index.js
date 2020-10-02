import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import SocialNetworkApp from './App'

ReactDOM.render( <SocialNetworkApp />, document.getElementById( 'root' ) )

serviceWorker.unregister()