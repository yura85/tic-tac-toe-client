'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('.message').text('You created account, please sign in to play').show()
  // $('#sign-up').hide()
  $('#sign-up').trigger('reset')
}
const failure = function (data) {
  $('.message').text('something went wrong please try again')
  $('form').trigger('reset')
}
const signInSeccess = function (data) {
  $('.message').text('Sign in success click to play')
  store.user = data.user
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('#sign-out').show()
  $('#change-password').show()
}

const changePasswordSuccess = function (data) {
  // store.user = data.user
  $('.message').text('You successfuly change your password').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('.box').empty()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.container').hide()
  $('#index-game').hide()
  $('#new-game').hide()
  $('#reset').hide()
  $('.message').text('Sign out success! Please create a new account or sign in to play').show()
  $('#sign-out').hide()
  $('.game-over').hide()
  $('#change-password').hide()
}

const createNewGameSuccess = function (data) {
  store.game = data.game
  $('.container').show()
  $('.message').hide()
  $('.container').show()
  $('#index-game').show()
  $('#new-game').hide()
  $('#reset').show()
}

const indexGameSuccess = function (data) {
  $('.message').text('You played ' + data.games.length + ' games').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
}

const updateGameSuccess = function (data) {
  store.game = data.game
}

module.exports = {
  signUpSuccess,
  failure,
  signInSeccess,
  changePasswordSuccess,
  signOutSuccess,
  createNewGameSuccess,
  indexGameSuccess,
  updateGameSuccess
}
