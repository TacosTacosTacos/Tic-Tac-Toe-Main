'use strict'
const uiNav = require('./uiNav.js')
const api = require('../auth/api.js')
const ui = require('../auth/ui.js')

const changePassword = (event) => {
  uiNav.navSignedIn()
  addNavHandlers()
}

const game = (event) => {
  uiNav.navGame()
}

const stats = (event) => {
  uiNav.navStats()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const signOut = (event) => {
  onSignOut(event)
  uiNav.navSignOut()
  removeNavHandlers()
}

const addNavHandlers = function () {
  $('#navChangePassword').on('click', changePassword)
  $('#navGame').on('click', game)
  $('#navStats').on('click', stats)
  $('#navSignOut').on('click', signOut)
}

const removeNavHandlers = function () {
  $('#navChangePassword').off('click', changePassword)
  $('#navGame').off('click', game)
  $('#navStats').off('click', stats)
  $('#navSignOut').off('click', signOut)
}

module.exports = {
  changePassword,
  game,
  stats,
  signOut,
  addNavHandlers
}
