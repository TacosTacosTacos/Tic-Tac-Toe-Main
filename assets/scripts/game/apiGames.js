'use strict'
const config = require('../config.js')
const store = require('../store.js')

const viewStats = () => {
  return $.ajax({
    url: config.apiOrigin + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

const newGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

const updateGameState = (index, value, over) => {
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }

  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    },
    data
  })
}

module.exports = {
  viewStats,
  newGame,
  updateGameState
}
