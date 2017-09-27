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

const determineGameWinner = () => {
  console.log('Determining Game Winner')
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
  const userMovesCompleted = store.game.cells.filter((cell) => { return cell === store.currentPiece }).length

  if (userMovesCompleted > 2) {
    return winConditions.some((condition) => {
      return condition.every((position) => {
        return store.game.cells[position] === store.currentPiece
      })
    })
  } else {
    return false
  }
}

const cellClickEvent = (i) => {
  // console.log('before', store.game.cells)
  store.game.cells[i] = store.currentPiece

  const totalMovesCompleted = store.game.cells.filter((cell) => { return cell.length === 1 }).length
  console.log('TotalMovesCompleted', totalMovesCompleted)

  // console.log('after', store.game.cells)
  store.over = determineGameWinner()
  uiGame.gameCellClick(i)
  onUpdateGameState(i, store.currentPiece, store.over)

  if (store.over === true) {
    $('#messageGame').text('Piece ' + store.currentPiece + ' is the winner!!!')
    removeGameClickHandlers()
  } else if (store.over === false && totalMovesCompleted === 9) {
    $('#messageGame').text('Failure is simply the opportunity to begin again, this time more intelligently.')
    removeGameClickHandlers()
  } else {
    changePiece(store.currentPiece)
  }

  $('#' + i).off('click')
}

const addGameClickHandlers = function () {
  console.log('EnteredClickHandler')
  for (let i = 0; i < 9; i++) {
    $('#' + i).on('click', () => { cellClickEvent(i) })
  }
}

const removeGameClickHandlers = function () {
  for (let i = 0; i < 9; i++) {
    $('#' + i).off('click')
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
  $('#messageGame').text('Turn: ' + store.currentPiece)
}

module.exports = {
  onViewStats,
  onNewGame,
  determineGameWinner
}
