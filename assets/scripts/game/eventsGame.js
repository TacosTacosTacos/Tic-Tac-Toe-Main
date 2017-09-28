'use strict'

const apiGame = require('./apiGames.js')
const uiGame = require('./uiGame.js')
const store = require('../store.js')
const constGames = require('./constGames')

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

const determineGameWinner = () => {
  const userMovesCompleted = store.game.cells.filter((cell) => { return cell === store.currentPiece }).length

  // If a specific user completes more than two turns, loop through each win condition.
  // If every individual index of that win condition matches the array of user selections then return true
  // Win conditions stored with the constants file
  if (userMovesCompleted > 2) {
    return constGames.winConditions.some((condition) => {
      return condition.every((position) => {
        return store.game.cells[position] === store.currentPiece
      })
    })
  } else {
    return false
  }
}

const cellClickEvent = (i) => {
  store.game.cells[i] = store.currentPiece

  const totalMovesCompleted = store.game.cells.filter((cell) => { return cell.length === 1 }).length

  store.over = determineGameWinner()
  uiGame.gameCellClick(i)

  // Determine what to do if Win, Lose, Tie, or Continue
  if (store.over === true) {
    onUpdateGameState(i, store.currentPiece, store.over)
    $('#messageGame').text('Piece ' + store.currentPiece + ' is the winner!!!')
    removeGameClickHandlers()
  } else if (store.over === false && totalMovesCompleted === 9) {
    store.over = true
    onUpdateGameState(i, store.currentPiece, store.over)
    $('#messageGame').text('Failure is simply the opportunity to begin again, this time more intelligently.')
    removeGameClickHandlers()
  } else {
    onUpdateGameState(i, store.currentPiece, store.over)
    changePiece(store.currentPiece)
  }

  $('#game-cell-' + i).off('click')
}

const addGameClickHandlers = function () {
  for (let i = 0; i < 9; i++) {
    $('#game-cell-' + i).on('click', () => { cellClickEvent(i) })
  }
}

const removeGameClickHandlers = function () {
  for (let i = 0; i < 9; i++) {
    $('#game-cell-' + i).off('click')
  }
}

const onViewStats = (event) => {
  apiGame.viewStats()
    .then(uiGame.viewStatsSuccess)
    .catch(uiGame.viewStatsFailure)
}

const onNewGame = (event) => {
  apiGame.newGame()
    .then(uiGame.newGameSuccess)
    .catch(uiGame.newGameFailure)
  $('#secGameBoard').show()
  addGameClickHandlers()
  uiGame.clearGameBoard()
  store.currentPiece = 'X'
  $('#messageGame').text('Turn: ' + store.currentPiece)
}

module.exports = {
  onViewStats,
  onNewGame,
  determineGameWinner
}
