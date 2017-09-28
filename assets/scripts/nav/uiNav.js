'use strict'

const store = require('../store.js')
const navSigningIn = () => {
  $('#secHomeLoggedOut').hide()
  $('#secHomeLoggedIn').show()
  $('.home').addClass('active')
  $('.home').removeClass('disabled')
  $('.game').removeClass('disabled')
  $('.stats').removeClass('disabled')
  $('.signout').removeClass('disabled')
}

const navSignedIn = () => {
  $('#secHomeLoggedIn').show()
  $('#secStats').hide()
  $('#secGame').hide()

  $('.home').addClass('active')
  $('.stats').removeClass('active')
  $('.game').removeClass('active')
}

const navGame = () => {
  $('#secHomeLoggedIn').hide()
  $('#secStats').hide()
  $('#secGame').show()

  $('.game').addClass('active')
  $('.home').removeClass('active')
  $('.stats').removeClass('active')
}

const navStats = () => {
  $('#secHomeLoggedIn').hide()
  $('#secStats').show()
  $('#secGame').hide()
  $('#messageStats').text('')
  $('.stats').addClass('active')
  $('.home').removeClass('active')
  $('.game').removeClass('active')
}

const navSignOut = () => {
  $('#messageNew').text('')
  $('#messageExisting').text('')
  $('#messageChangePassword').text('')
  $('#messageGame').text('Turn: X')
  $('.chgpass').val('')
  $('#secHomeLoggedOut').show()
  $('#secHomeLoggedIn').hide()
  $('#secGame').hide()
  $('#secGameBoard').hide()
  $('#secStats').hide()
  $('#messageExisting').hide()
  $('#messageNew').hide()
  $('#messageChangePassword').hide()

  $('.home').addClass('disabled')
  $('.game').addClass('disabled')
  $('.stats').addClass('disabled')
  $('.signout').addClass('disabled')

  $('.game').removeClass('active')
  $('.stats').removeClass('active')
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
