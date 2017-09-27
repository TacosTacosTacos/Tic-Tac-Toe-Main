'use strict'

const apiGame = require('./apiGames.js')
const uiGame = require('./uiGame.js')
// const changePiece = (currentPiece) => {
//   if (currentPiece === 'X') {
//     currentPiece = 'O'
//   } else {
//     currentPiece = 'X'
//   }
//   return currentPiece
// }

const addGameClickHandlers = function () {
  console.log('EnteredClickHandler')
  for (let i = 0; i < 9; i++) {
    $('#' + i).on('click', () => { console.log('Cell click Worked') })
  }
}

// let currentPiece = 'X'

const onViewStats = (event) => {
  apiGame.viewStats()
    .then(uiGame.viewStatsSuccess)
    .catch(uiGame.viewStatsFailure)
  console.log('Stat Retrieval Completed')
}

const onNewGame = () => {
  apiGame.newGame()
    .then(uiGame.newGameSuccess)
    .catch(uiGame.newGameFailure)
  $('#secGameBoard').show()
  addGameClickHandlers()
  uiGame.clearGameBoard()
}

// $(() => {
//   setAPIOrigin(location, config)
//   let currentPiece = 'X'
//   $('#game-cell-0').on('click', () => {
//     $('#game-cell-0').text(currentPiece)
//
//     currentPiece = changePiece(currentPiece)
//     $('#game-cell-0').off('click')
//     $('#game-cell-0').css('cursor', 'not-allowed')
//     $('#game-cell-0').hover(function () {
//       $(this).css('background-color', '#4e4e4e')
//     }, function () {
//       $(this).css('background-color', '#4e4e4e')
//     })
//   })
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
