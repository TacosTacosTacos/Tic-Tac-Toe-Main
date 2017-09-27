'use strict'
const config = require('../config.js')
const store = require('../store.js')

const viewStats = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

const newGame = () => {
  console.log(store)
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
  console.log('Data to change', data)

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
