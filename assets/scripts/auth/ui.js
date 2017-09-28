'use strict'
const store = require('../store.js')
const uiNav = require('./uiNav.js')
const eventsNav = require('./eventsNav')

const signInSuccess = function (data) {
  $('#messageExisting').text('')
  store.player_x = data.user
  uiNav.navSigningIn()
  eventsNav.addNavHandlers()
}
const signInFailure = function (error) {
  console.error(error)
  if (error.status === 401) {
    $('#messageExisting').text('Please enter a correct email and password')
  } else {
    $('#messageExisting').text('Unexpected error')
  }
}

const signUpSuccess = function (data) {
  $('#messageNew').text('Signed up successfully')
}
const signUpFailure = function (error) {
  console.error(error)
  $('#messageNew').text('Unexpected error')
}
const signUpPasswordFailure = () => {
  $('#messageNew').text('Your passwords do not match')
}

const changePasswordSuccess = function (data) {
  $('#messageChangePassword').text('Password Changed Successfully')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#messageChangePassword').text('Unexpected error')
}

const signOutSuccess = function (data) {
  store.player_x = null
}

const signOutFailure = function (error) {
  console.error(error)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signUpPasswordFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
