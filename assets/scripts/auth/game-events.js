'use strict'

// require , getFormFields, my API object, my UI object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// reset game button
const onClickToReset = function (event) {
  event.preventDefault()
  $('#container').html('')
}
// create onClick function to handle the clicks on cells
let gameStatus = true

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
    gameStatus = false
    console.log('winner ' + currentPlayer + ' game status ', gameStatus)
  } else if (array.every(index => index !== '')) {
    gameStatus = false
    console.log('draw')
  }
}

let currentPlayer = 'x'

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const onClick = function (event) {
  event.preventDefault()
  let currentValue = $(event.target).text()
  console.log(currentValue)
  const dataOfId = $(event.target).data('id')
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

// const play = function (gameboard, positionInGamabord, currentPlayer) {
//   if (gameboard[positionInGamabord] === '') {
//     gameboard[positionInGamabord] = currentPlayer
//   }
// }

const addGameEventsHandlers = function () {
  // when the #click-00 is clicked run on click function
  $('.box').on('click', onClick)
}
module.exports = {
  addGameEventsHandlers,
  onClickToReset
}
