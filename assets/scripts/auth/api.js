'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.player_x.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.player_x.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
