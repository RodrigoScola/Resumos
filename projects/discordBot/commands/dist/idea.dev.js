"use strict";

var charactersArr = ['1', '2', '3'];
var locationsArr = ['bathroom', 'room', 'outside'];
var timeOfDay = ['morning', 'afternoon', 'night', 'early morning'];

randomOption = function randomOption(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var ideas = {
  characters: " ".concat(randomOption(charactersArr)),
  location: " ".concat(randomOption(locationsArr)),
  timeOfDay: " ".concat(randomOption(timeOfDay)),
  mode: "".concat(randomOption(charactersArr)),
  kinks: " ".concat(randomOption(charactersArr))
};
module.exports = {
  name: 'idea',
  description: 'Ping',
  execute: function execute(message, args) {
    message.channel.send(JSON.stringify(ideas));
  }
};