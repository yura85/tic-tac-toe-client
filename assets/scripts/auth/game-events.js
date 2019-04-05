'use strict'

// require , getFormFields, my API object, my UI object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// reset game button
const onClickToReset = function (event) {
  event.isEventPreventDefault()
  $('.box').text('')
}
// create onClick function to handle the clicks on cells
let gameStatus = false

const gameboard = ['', '', '', '', '', '', '', '']

const wrongMove = function () {
  $('.message').text('this box is taken').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
}

const winnerCheck = function (array) {
  if ((array[0] === array[1] && array[1] === array[2] && array[2] === currentPlayer) ||
  (array[3] === array[4] && array[4] === array[5] && array[5] === currentPlayer) ||
  (array[6] === array[7] && array[7] === array[8] && array[8] === currentPlayer) ||
  (array[0] === array[3] && array[3] === array[6] && array[6] === currentPlayer) ||
  (array[1] === array[4] && array[4] === array[7] && array[7] === currentPlayer) ||
  (array[2] === array[5] && array[5] === array[8] && array[8] === currentPlayer) ||
  (array[0] === array[4] && array[4] === array[8] && array[8] === currentPlayer) ||
  (array[2] === array[4] && array[4] === array[6] && array[6] === currentPlayer)) {
    gameStatus = true
    console.log(store.game)
    $('.box').off()
    $('.turn').hide()
    console.log('winner ' + currentPlayer + ' game status ', gameStatus)
    $('.win-or-loose').text('winner ' + currentPlayer).show()
    $('.game-over').text('GAME OVER START NEW GAME').show()
  } else if (array.every(index => index !== '')) {
    gameStatus = true
    console.log(store.game)
    $('.box').off()
    $('.turn').hide()
    console.log('draw ', gameStatus)
    $('.game-over').text('GAME OVER START NEW GAME').show()
    $('.win-or-loose').text('DROW').show()
  }
}

let currentPlayer = 'x'
$('.turn').text('player x turn')
const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    $('.turn').text('player o turn')
  } else {
    currentPlayer = 'x'
    $('.turn').text('player x turn')
  }
}

const onClick = function (event) {
  event.preventDefault()

  let currentValue = $(event.target).text()
  console.log(currentValue)
  const dataOfId = $(event.target).data('id')
  store.game.id = dataOfId
  // store.game.id = dataOfId
  console.log(dataOfId)

  gameboard[dataOfId] = currentPlayer
  console.log(gameboard)

  if (currentValue === '' && currentPlayer === 'x') {
    currentValue = $(event.target).text(currentPlayer)
    winnerCheck(gameboard)
    console.log(currentValue)
    switchPlayer()
  } else if (currentValue === '' && currentPlayer === 'o') {
    currentValue = $(event.target).text(currentPlayer)
    winnerCheck(gameboard)
    console.log(currentValue)
    switchPlayer()
  } else {
    wrongMove()
  }
}
const onCreateNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewGame(data)
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFailure)
}
const onIndexGame = function (event) {
  event.preventDefault()
  console.log('index game')
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}
const onUpDataGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.upDateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
const addGameEventsHandlers = function () {
  $('.box').on('click', onClick)
  $('#new-game').on('submit', onCreateNewGame)
  $('#index-game').on('submit', onIndexGame)
  // $('#update-game').on('submit', onUpDataGame)
}
module.exports = {
  addGameEventsHandlers,
  onClickToReset,
  onCreateNewGame,
  onIndexGame,
  onUpDataGame
}
