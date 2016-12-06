import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, createLogger } from 'relite'
import * as actions from './actions'
import App from './App'

const initialState = {
	count: 0
}

const store = createStore(actions, initialState)
const logger = createLogger({ name: 'root'})

store.subscribe(render)
store.subscribe(logger)

render()

function render() {
	ReactDOM.render(
	  <App state={store.getState()} actions={store.actions} />,
	  document.getElementById('root')
	)
}


