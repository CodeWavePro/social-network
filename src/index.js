import './index.scss'
import * as serviceWorker from './serviceWorker'
import state from './redux/state'
import {reRenderEntireTree} from './render'

reRenderEntireTree( state )
serviceWorker.unregister()
