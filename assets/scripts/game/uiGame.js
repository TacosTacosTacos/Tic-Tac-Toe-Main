'use strict'
const store = require('../store.js')

const clearGameBoard = () => {
  for (let id = 0; id < 9; id++) {
    $('#' + id).text('')
    $('#' + id).css('cursor', 'default')
    $('#' + id).css('background-color', '#fff')
    $('#' + id).hover(function () {
      $(this).css('background-color', '#ffa500')
    }, function () {
      $(this).css('background-color', '#fff')
    })
  }
}

const gameCellClick = (id) => {
  $('#' + id).text(store.currentPiece)
  $('#' + id).css('cursor', 'not-allowed')
  $('#' + id).hover(function () {
    $(this).css('background-color', '#4e4e4e')
  }, function () {
    $(this).css('background-color', '#4e4e4e')
  })
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
  newGameFailure,
  gameCellClick
}
