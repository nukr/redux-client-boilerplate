import * as types from '../constants/ActionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_ADD_TODO:
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text
      }, ...state]

    case types.RECEIVE_ADD_TODO:
      return state

    case types.RECEIVE_TODOS:
      return action.todos

    case types.REQUEST_DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case types.COMPLETE_TODO:
      return state.map(todo => {
        todo.id === action.id
          ? Object.assign({}, todo, {text: action.text})
          : todo
      })

    default:
      return state
  }
}

