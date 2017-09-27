'use strict'
const store = require('../store.js')
const uiNav = require('./uiNav.js')
const eventsNav = require('./eventsNav')

const signInSuccess = function (data) {
  console.log(data)
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
    console.log('This is the error', error)
    $('#messageExisting').text('Unexpected error')
  }
}

const signUpSuccess = function (data) {
  console.log(data)
  $('#messageNew').text('Signed up successfully')
}
const signUpFailure = function (error) {
  console.error(error)
  console.log('This is the error', error)
  $('#messageNew').text('Unexpected error')
}
const signUpPasswordFailure = () => {
  $('#messageNew').text('Your passwords do not match')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#messageChangePassword').text('Password Changed Successfully')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#messageChangePassword').text('Unexpected error')
}

const signOutSuccess = function (data) {
  console.log('Logged Out Successfully')
  console.log('player val', store.player_x)
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
