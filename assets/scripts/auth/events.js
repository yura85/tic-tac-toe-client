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
let currentPlayer = 'x'

const onClick = function (event) {
  event.preventDefault()
  let currentValue = $(event.target).data('id')
  if (currentValue === ' ' && currentPlayer === 'x') {
    currentValue = $(event.target).text(currentPlayer)
    currentPlayer = 'o'
  }
  if (currentValue === ' ' && currentPlayer === 'o') {
    currentValue = $(event.target).text(currentPlayer)
    currentPlayer = 'x'
  }
  if (currentValue !== ' ' && (currentPlayer === 'x' || currentPlayer === 'o')) {
    console.log('console.error();')
  }

  console.log(currentValue)
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
