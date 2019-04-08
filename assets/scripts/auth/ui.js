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
  $('.box').empty()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.container').hide()
  $('#index-game').hide()
  $('#new-game').hide()
  $('#reset').hide()
  $('.message').hide()
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

const indexGameSuccess = function (data) {
  $('.message').text('You played ' + data.games.length).show()
  console.log('index of all games success ', data)
}

const updateGameSuccess = function (data) {
  console.log('update success ', data)
  store.game = data.game
}

module.exports = {
  signUpSuccess,
  Failure,
  signInSeccess,
  changePasswordSeccess,
  changePasswordFailure,
  signOutSuccess,
  createNewGameSuccess,
  indexGameSuccess,
  updateGameSuccess
}
