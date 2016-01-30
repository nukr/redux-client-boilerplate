import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'
const url = 'http://localhost:5000/todo'

function requestAddTodo (text) {
  return { type: types.REQUEST_ADD_TODO, text }
}

function receiveAddTodo (text) {
  return { type: types.RECEIVE_ADD_TODO, text }
}

export function addTodo (text) {
  return (dispatch, getState) => {
    dispatch(requestAddTodo(text))
    return fetch(`${url}/${text}`, {method: 'post'})
    .then(response => response.json())
    .then(result => dispatch(receiveAddTodo(result)))
  }
}

function requestTodos () {
  return { type: types.REQUEST_TODOS }
}

function receiveTodos (todos) {
  return { type: types.RECEIVE_TODOS, todos }
}

export function fetchTodos () {
  return (dispatch) => {
    dispatch(requestTodos())
    return fetch(`${url}s`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(result => dispatch(receiveTodos(result)))
  }
}

function requestDeleteTodo (id) {
  return { type: types.REQUEST_DELETE_TODO, id }
}

function receiveDeleteTodo (result) {
  return { type: types.RECEIVE_DELETE_TODO, result }
}

export function deleteTodo (id) {
  return (dispatch) => {
    dispatch(requestDeleteTodo(id))
    return fetch(`${url}/${id}`, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(result => dispatch(receiveDeleteTodo(result)))
  }
}

export function completeTodo (id) {
  return { type: types.COMPLETE_TODO, id }
}
