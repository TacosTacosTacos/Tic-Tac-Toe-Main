'use strict'

const apiGame = require('./apiGames.js')
const uiGame = require('./uiGame.js')
const store = require('../store.js')

const changePiece = (currentPiece) => {
  if (currentPiece === 'X') {
    store.currentPiece = 'O'
  } else {
    store.currentPiece = 'X'
  }
  $('#messageGame').text('Turn: ' + store.currentPiece)
  return store.currentPiece
}

const onUpdateGameState = function (index, value, over) {
  apiGame.updateGameState(index, value, over)
    .then(uiGame.updateGameState)
    .catch(uiGame.updateGameState)
}

const cellClickEvent = (i) => {
  // console.log('before', store.game.cells)
  store.game.cells[i] = store.currentPiece
  // console.log('after', store.game.cells)

  const over = false // Remove This AFTER SETTING OVER VALUE

  onUpdateGameState(i, store.currentPiece, over)
  uiGame.gameCellClick(i)
  $('#' + i).off('click')
  changePiece(store.currentPiece)
}

const addGameClickHandlers = function () {
  console.log('EnteredClickHandler')
  for (let i = 0; i < 9; i++) {
    $('#' + i).on('click', () => { cellClickEvent(i) })
  }
}

const onViewStats = (event) => {
  apiGame.viewStats()
    .then(uiGame.viewStatsSuccess)
    .catch(uiGame.viewStatsFailure)
  console.log('Stat Retrieval Completed')
}

const onNewGame = (event) => {
  apiGame.newGame()
    .then(uiGame.newGameSuccess)
    .catch(uiGame.newGameFailure)
  $('#secGameBoard').show()
  addGameClickHandlers()
  uiGame.clearGameBoard()
  store.currentPiece = 'X'
  console.log('event', event.id)
}

// $(() => {
//   setAPIOrigin(location, config)
//   let currentPiece = 'X'
// $('#game-cell-0').on('click', () => {
//   $('#game-cell-0').text(currentPiece)
//
//   currentPiece = changePiece(currentPiece)
//   $('#game-cell-0').off('click')
//   $('#game-cell-0').css('cursor', 'not-allowed')
//   $('#game-cell-0').hover(function () {
//     $(this).css('background-color', '#4e4e4e')
//   }, function () {
//     $(this).css('background-color', '#4e4e4e')
//   })
// })
//   $('#game-cell-1').on('click', () => {
//     $('#game-cell-1').text(currentPiece)
//
//     currentPiece = changePiece(currentPiece)
//     $('#game-cell-1').off('click')
//     $('#game-cell-1').css('cursor', 'not-allowed')
//     $('#game-cell-1').hover(function () {
//       $(this).css('background-color', '#4e4e4e')
//     }, function () {
//       $(this).css('background-color', '#4e4e4e')
//     })
//   })

module.exports = {
  onViewStats,
  onNewGame
}
