'use strict'
const store = require('../store.js')

const clearGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }
}

const viewStatsSuccess = function (data) {
  console.log(data.games)
  if (data.games.length === 0) {
    $('#messageStats').text('There are no results to display')
  } else {
    $('#messageStats').text(JSON.stringify(data.games))
  }
}
const viewStatsFailure = function (error) {
  console.error(error)
  console.log('This is the error', error)
  $('#messageStats').text('Unexpected error')
}

const newGameSuccess = function (data) {
  console.log(data)
  store.game = data.game
  console.log(store.game)
}
const newGameFailure = function (error) {
  console.error(error)
  console.log('This is the error', error)
  $('#messageGame').text('Unexpected error')
}

module.exports = {
  viewStatsSuccess,
  viewStatsFailure,
  clearGameBoard,
  newGameSuccess,
  newGameFailure
}
