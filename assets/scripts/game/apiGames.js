'use strict'
const config = require('../config.js')
const store = require('../store.js')

const viewStats = () => {
  console.log('got to apiGames')
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

module.exports = {
  viewStats,
  newGame
}
