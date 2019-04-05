'use strict'
const store = require('../store')

const signUpSeccess = function (data) {
  console.log('sign up success with the data', data)
  $('form').trigger('reset')
}
const signUpfailure = function (data) {
  console.log('sign up failure with the data', data)
  $('form').trigger('reset')
}
const signInSeccess = function (data) {
  $('.box').css('display: flex')
  console.log('sign in success with the data', data)
  store.user = data.user
  $('form').trigger('reset')
}
const signInFailure = function (data) {
  console.log('sign in failure with the data', data)
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
  console.log('success')
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function () {
  console.log('failure')
}
const createNewGameSuccess = function (data) {
  store.game = data.game
  console.log('create new game success ', data)
}
const createNewGameFailure = function (data) {
  console.log('create new game failure ', data)
}
const indexGameSuccess = function (data) {
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
module.exports = {
  signUpSeccess,
  signUpfailure,
  signInSeccess,
  signInFailure,
  changePasswordSeccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createNewGameSuccess,
  createNewGameFailure,
  indexGameSuccess,
  indexGameFailure,
  updateGameSuccess,
  updateGameFailure
}
