'use strict'

// require , getFormFields, my API object, my UI object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

// declere variables currentPlayer, gameboard and gameStatus initial value

let currentPlayer = 'x'
let gameStatus = false
let gameboard = ['', '', '', '', '', '', '', '']

//  create function that run when clicked on taken box
const wrongMove = function (currentValue) {
  if ((currentValue === 'x') || (currentValue === 'o')) {
    $('.message').text('this box is taken').show()
    setTimeout(() => {
      $('.message').text('').hide()
    }, 2000)
  }
}

//  create function to check winner
const winnerCheck = function (array, currentPlayer) {
  if ((array[0] === array[1] && array[1] === array[2] && array[2] === currentPlayer) ||
  (array[3] === array[4] && array[4] === array[5] && array[5] === currentPlayer) ||
  (array[6] === array[7] && array[7] === array[8] && array[8] === currentPlayer) ||
  (array[0] === array[3] && array[3] === array[6] && array[6] === currentPlayer) ||
  (array[1] === array[4] && array[4] === array[7] && array[7] === currentPlayer) ||
  (array[2] === array[5] && array[5] === array[8] && array[8] === currentPlayer) ||
  (array[0] === array[4] && array[4] === array[8] && array[8] === currentPlayer) ||
  (array[2] === array[4] && array[4] === array[6] && array[6] === currentPlayer)) {
    gameStatus = true
    $('.turn').hide()
    // $('.container').hide()
    $('.game-over').text('WINNER ' + currentPlayer + ' START NEW GAME').show()
  } else if (array.every(index => index !== '')) {
    gameStatus = true
    $('.turn').hide()
    // $('.container').hide()
    $('.game-over').text('IT\'S DRAW! START A NEW GAME').show()
  }
}

$('.turn').text('player x turn')

//  create function that switch player after each move
const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    $('.turn').text('player o turn')
  } else {
    currentPlayer = 'x'
    $('.turn').text('player x turn')
  }
}

//  create function thet run when clicked on game box
const onClick = function (event) {
  event.preventDefault()
  if (gameStatus === true) {
    return
  }
  let currentValue = $(event.target).text()
  const dataOfId = $(event.target).data('id')

  if (currentValue === '' && currentPlayer === 'x') {
    gameboard[dataOfId] = currentPlayer
    currentValue = $(event.target).text(currentPlayer)
    winnerCheck(gameboard, currentPlayer)
    api.upDateGame(dataOfId, currentPlayer, gameStatus)
    switchPlayer()
  } else if (currentValue === '' && currentPlayer === 'o') {
    gameboard[dataOfId] = currentPlayer
    currentValue = $(event.target).text(currentPlayer)
    winnerCheck(gameboard, currentPlayer)
    api.upDateGame(dataOfId, currentPlayer, gameStatus)
    switchPlayer()
  } else {
    wrongMove(currentValue)
  }
}

//  create function to create new game
const onCreateNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewGame(data)
    .then(ui.createNewGameSuccess)
    .catch(ui.Failure)
}

//  create function to get the number of game pleyed of current player
const onIndexGame = function (event) {
  event.preventDefault()
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.Failure)
}

//  create function that restart game at any time
const onClickToReset = function (event) {
  event.preventDefault()
  $('.box').empty()
  gameboard = ['', '', '', '', '', '', '', '', '']
  switchPlayer()
  api.createNewGame(event)
    .then(ui.createNewGameSuccess)
    .catch(ui.Failure)
  $('.win-or-loose').hide()
  $('.game-over').hide()
  $('.turn').text('player ' + currentPlayer + ' turn').show()
  gameStatus = false
}

const addGameEventsHandlers = function () {
  $('.box').on('click', onClick)
  $('#new-game').on('submit', onCreateNewGame)
  $('#index-game').on('submit', onIndexGame)
  $('#reset').on('submit', onClickToReset)
}
module.exports = {
  addGameEventsHandlers,
  onClickToReset,
  onCreateNewGame,
  onIndexGame
}
