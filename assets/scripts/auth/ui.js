'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success with the data', data)
  $('.message').text('Sign up success')
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
}
const Failure = function (data) {
  console.log('something went wrong please try again')
}
const signInSeccess = function (data) {
  $('.message').text('Sign in success click to play')
  console.log('sign in success with the data', data)
  store.user = data.user
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
}

const changePasswordSeccess = function (data) {
  console.log('change password success with the data', data)
  store.user = data.user
  $('form').trigger('reset')
}
const changePasswordFailure = function (data) {
  console.log('sign in failure with the data', data)
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  console.log('sign out success')
  store.user = null
  $('form').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('.container').hide()
  $('#index-game').hide()
  $('#new-game').hide()
  $('#reset').hide()
}

const createNewGameSuccess = function (data) {
  store.game = data.game
  $('.message').hide()
  $('.container').show()
  $('#index-game').show()
  $('#new-game').hide()
  $('#reset').show()
  console.log('create new game success ', data)
}
const createNewGameFailure = function (data) {
  console.log('create new game failure ', data)
}
const indexGameSuccess = function (data) {
  $('.message').show('You played ' + store.game + ' games')
  console.log('index of all games success ', data)
}
const indexGameFailure = function (data) {
  console.log('index of all games failure ', data)
}
const updateGameSuccess = function (data) {
  console.log('update success ', data)
  store.game = data.game
}
const updateGameFailure = function () {
  console.log('update failure')
}
const resetGame = function () {

}
module.exports = {
  signUpSuccess,
  Failure,
  signInSeccess,
  changePasswordSeccess,
  changePasswordFailure,
  signOutSuccess,
  createNewGameSuccess,
  createNewGameFailure,
  indexGameSuccess,
  indexGameFailure,
  updateGameSuccess,
  updateGameFailure,
  resetGame
}
