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
module.exports = {
  signUpSeccess,
  signUpfailure,
  signInSeccess,
  signInFailure,
  changePasswordSeccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
