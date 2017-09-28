'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const constGames = require('./constGames')

const clearGameBoard = () => {
  for (let id = 0; id < 9; id++) {
    $('#game-cell-' + id).text('')
    $('#game-cell-' + id).css('cursor', 'default')
    $('#game-cell-' + id).css('background-color', '#fff')
    $('#game-cell-' + id).hover(function () {
      $(this).css('background-color', '#ffa500')
    }, function () {
      $(this).css('background-color', '#fff')
    })
  }
}

const gameCellClick = (id) => {
  $('#game-cell-' + id).text(store.currentPiece)
  $('#game-cell-' + id).css('cursor', 'not-allowed')
  $('#game-cell-' + id).hover(function () {
    $(this).css('background-color', '#4e4e4e')
  }, function () {
    $(this).css('background-color', '#4e4e4e')
  })
}

const viewStatsSuccess = function (data) {
  if (data.games.length === 0) {
    $('#messageStats').text('There are no results to display')
  } else {
    const gamesCompletedTotal = data.games.length

    const gamesWonTotal = data.games.filter((game) => {
      return constGames.winConditions.some((condition) => {
        return condition.every((position) => {
          return game.cells[position] === 'X'
        })
      })
    }).length

    const gamesLostTotal = gamesCompletedTotal - gamesWonTotal

    $('#messageStats').text('')
    $('#completed').text('Total Completed Games: ' + gamesCompletedTotal)
    $('#wins').text('Games Won: ' + gamesWonTotal)
    $('#losses').text('Games Lost: ' + gamesLostTotal)
  }
}
const viewStatsFailure = function (error) {
  console.error(error)
  reuse.emptyMultipleTextFields(['#completed', '#wins', '#losses'])
  $('#messageStats').text('Unexpected error')
}

const newGameSuccess = function (data) {
  store.game = data.game
}
const newGameFailure = function (error) {
  console.error(error)
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
