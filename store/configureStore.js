import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'
import { hashHistory } from 'react-router'
import reducers from '../reducers'
import DevTools from '../containers/DevTools'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

const reduxRouterMiddleware = syncHistory(hashHistory)

let finalCreateStore = compose(
  applyMiddleware(thunk, logger, reduxRouterMiddleware),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

export default function configureStore (initialState) {
  const store = finalCreateStore(reducers, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
                      store.replaceReducer(reducers)
                     )
  }

  reduxRouterMiddleware.listenForReplays(store)

  return store
}
