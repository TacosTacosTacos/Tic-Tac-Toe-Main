'use strict'

const store = require('../store.js')
const reuse = require('../reuse/reuse.js')

const navSigningIn = () => {
  $('#secHomeLoggedOut').hide()
  $('#secGame').show()
  $('.game').addClass('active')
  reuse.removeDisabledClassesNavArray(['.changePassword', '.game', '.stats', '.signout'])
}

const navSignedIn = () => {
  $('#secChangePassword').show()
  reuse.hideMultipleFields(['#secStats', '#secGame'])

  $('.changePassword').addClass('active')
  reuse.removeActiveClassesNavArray(['.stats', '.game'])
}

const navGame = () => {
  $('#secChangePassword').hide()
  $('#secStats').hide()
  $('#secGame').show()

  $('.game').addClass('active')
  reuse.removeActiveClassesNavArray(['.changePassword', '.stats'])
}

const navStats = () => {
  reuse.hideMultipleFields(['#secChangePassword', '#secGame'])
  $('#secStats').show()
  reuse.emptyMultipleTextFields(['#messageStats', '#completed', '#wins', '#losses'])
  // $('#messageStats').text('')
  // $('#completed').text('')
  // $('#wins').text('')
  // $('#losses').text('')
  $('.stats').addClass('active')
  reuse.removeActiveClassesNavArray(['.changePassword', '.game'])
}

const navSignOut = () => {
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword'])

  $('#messageGame').text('Turn: X')
  $('.chgpass').val('')
  $('#secHomeLoggedOut').show()

  reuse.hideMultipleFields(['#secChangePassword', '#secGame', '#secGameBoard', '#secStats', '#messageExisting', '#messageNew', '#messageChangePassword'])
  reuse.addDisableClassNavArray(['.changePassword', '.game', '.stats', '.signout'])

  reuse.removeActiveClassesNavArray(['.game', '.stats'])
  $('#messageNew').removeClass('alert-danger')
  $('#messageNew').removeClass('alert-success')
  $('#messageChangePassword').removeClass('alert-danger')
  $('#messageChangePassword').removeClass('alert-success')

  store.store = null
}

module.exports = {
  navSigningIn,
  navSignedIn,
  navGame,
  navStats,
  navSignOut
}
