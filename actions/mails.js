import fetch from 'isomorphic-fetch'

function requestMails () {
  return { type: 'REQUEST_MAILS' }
}

function receiveMails (mails) {
  return { type: 'RECEIVE_MAILS', mails }
}

const url = 'http://localhost:5000/mail'

export function fetchMails () {
  return (dispatch) => {
    dispatch(requestMails())
    return fetch(`${url}s`, {
      method: 'get'
    }).then(response => response.json())
      .then(result => dispatch(receiveMails(result)))
  }
}
