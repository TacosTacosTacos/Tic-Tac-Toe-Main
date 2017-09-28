'use strict'
const store = require('../store.js')
const uiNav = require('../nav/uiNav.js')
const eventsNav = require('../nav/eventsNav')

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
    $('#messageExisting').show()
  } else {
    $('#messageExisting').text('Unexpected error')
    $('#messageExisting').show()
  }
}

const signUpSuccess = function (data) {
  $('#messageNew').text('Signed up successfully')
  $('#messageNew').addClass('alert-success')
  $('#messageNew').removeClass('alert-danger')
  $('#messageNew').show()
}
const signUpFailure = function (error) {
  console.error(error)
  $('#messageNew').text('Unexpected error')
  $('#messageNew').addClass('alert-danger')
  $('#messageNew').removeClass('alert-success')
  $('#messageNew').show()
}
const signUpPasswordFailure = () => {
  $('#messageNew').text('Your passwords do not match')
  $('#messageNew').addClass('alert-danger')
  $('#messageNew').removeClass('alert-success')
  $('#messageNew').show()
}

const changePasswordSuccess = function (data) {
  $('#messageChangePassword').text('Password Changed Successfully')
  $('#messageChangePassword').addClass('alert-success')
  $('#messageChangePassword').removeClass('alert-danger')
  $('#messageChangePassword').show()
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#messageChangePassword').text('Unexpected error')
  $('#messageChangePassword').addClass('alert-danger')
  $('#messageChangePassword').removeClass('alert-success')
  $('#messageChangePassword').show()
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
