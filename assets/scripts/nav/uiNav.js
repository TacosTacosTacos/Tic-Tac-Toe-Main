'use strict'

const store = require('../store.js')
const reuse = require('../reuse/reuse.js')

const navSigningIn = () => {
  $('#secHomeLoggedOut').hide()
  $('#secHomeLoggedIn').show()
  $('.home').addClass('active')
  reuse.removeDisabledClassesNavArray(['.home', '.game', '.stats', '.signout'])
}

const navSignedIn = () => {
  $('#secHomeLoggedIn').show()
  reuse.hideMultipleFields(['#secStats', '#secGame'])

  $('.home').addClass('active')
  reuse.removeActiveClassesNavArray(['.stats', '.game'])
}

const navGame = () => {
  $('#secHomeLoggedIn').hide()
  $('#secStats').hide()
  $('#secGame').show()

  $('.game').addClass('active')
  reuse.removeActiveClassesNavArray(['.home', '.stats'])
}

const navStats = () => {
  reuse.hideMultipleFields(['#secHomeLoggedIn', '#secGame'])
  $('#secStats').show()
  $('#messageStats').text('')
  $('.stats').addClass('active')
  reuse.removeActiveClassesNavArray(['.home', '.game'])
}

const navSignOut = () => {
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword'])

  $('#messageGame').text('Turn: X')
  $('.chgpass').val('')
  $('#secHomeLoggedOut').show()

  reuse.hideMultipleFields(['#secHomeLoggedIn', '#secGame', '#secGameBoard', '#secStats', '#messageExisting', '#messageNew', '#messageChangePassword'])
  reuse.addDisableClassNavArray(['.home', '.game', '.stats', '.signout'])

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
