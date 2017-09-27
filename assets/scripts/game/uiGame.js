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
    const gamesCompletedTotal = data.games.length

    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    const gamesWonTotal = data.games.filter((game) => {
      return winConditions.some((condition) => {
        return condition.every((position) => {
          return game.cells[position] === 'X'
        })
      })
    }).length

    const gamesLostTotal = gamesCompletedTotal - gamesWonTotal
    console.log(JSON.stringify(data.games))
    $('#messageStats').text('Total Completed Games:' + gamesCompletedTotal + '\nGames Won: ' + gamesWonTotal + '\nGames Lost: ' + gamesLostTotal)
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
