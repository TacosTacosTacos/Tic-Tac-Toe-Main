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

  $('.stats').addClass('active')
  $('.home').removeClass('active')
  $('.game').removeClass('active')
}

const navSignOut = () => {
  $('#messageNew').text('')
  $('#messageExisting').text('')
  $('#messageChangePassword').text('')
  $('#messageStats').text('')
  $('#messageGame').text('Turn: X')
  $('.chgpass').val('')
  $('#secHomeLoggedOut').show()
  $('#secHomeLoggedIn').hide()
  $('#secGame').hide()
  $('#secGameBoard').hide()
  $('#secStats').hide()

  $('.home').addClass('disabled')
  $('.game').addClass('disabled')
  $('.stats').addClass('disabled')
  $('.signout').addClass('disabled')

  $('.game').removeClass('active')
  $('.stats').removeClass('active')
  store.store = null
}

module.exports = {
  navSigningIn,
  navSignedIn,
  navGame,
  navStats,
  navSignOut
}
