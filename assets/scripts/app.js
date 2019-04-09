'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./auth/events.js')
const gameEvents = require('./auth/game-events.js')

$(() => {
  // your JS code goes here
  userEvents.addHandlers()
  gameEvents.addGameEventsHandlers()

  $('.message').text('Please create a new account or sign in to play')
  $('.container').hide()
  $('#reset').hide()
  $('#index-game').hide()
  $('#new-game').hide()
  $('#sign-out').hide()
})
