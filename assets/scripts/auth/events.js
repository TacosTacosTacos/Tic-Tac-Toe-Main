'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const eventsNav = require('./eventsNav')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('This is the data', data) // Check that the data is being pulled back properly
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  console.log('Completed Sign In')
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('This is the data', data) // Check that the data is being pulled back properly
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    ui.signUpPasswordFailure()
  }
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('This Worked')
  // console.log('This is the data', data) // Check that the data is being pulled back properly
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
