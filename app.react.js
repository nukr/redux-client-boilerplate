import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import Root from './containers/Root'
import TodoApp from './containers/TodoApp'
import CourierApp from './containers/CourierApp'
import injectTapEventPlugin from 'react-tap-event-plugin'
const store = configureStore()

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Root}>
        <Route path='todo' component={TodoApp} />
        <Route path='courier' component={CourierApp} />
        <IndexRoute component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
