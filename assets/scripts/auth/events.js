'use strict'

// require , getFormFields, my API object, my UI object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// create sign up function
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSeccess)
    .catch(ui.signUpfailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSeccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then()
    .catch()
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// reset game button
const onClickToReset = function () {
  event.preventDefault()
  $('#container').html('')
}
// create onClick function to handle the clicks on cells
const gamebord = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]

const wrongMove = function () {
  $('.message').html('this box is taken')
  console.log($('.message'))
}

let currentPlayer = 'x'

const onClick = function (event) {
  event.preventDefault()
  let currentValue = $(event.target).text()
  console.log(currentValue)
  if (currentValue === '' && currentPlayer === 'x') {
    currentValue = $(event.target).text(currentPlayer)
    console.log(currentValue)
    currentPlayer = 'o'
  } else if (currentValue === '' && currentPlayer === 'o') {
    currentValue = $(event.target).text(currentPlayer)
    currentPlayer = 'x'
  } else {
    wrongMove()
  }
}
const addHandlers = function () {
  // when the #click-00 is clicked run on click function
  $('.box').on('click', onClick)
}
module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onClickToReset
}
