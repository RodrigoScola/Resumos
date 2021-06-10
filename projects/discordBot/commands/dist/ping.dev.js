"use strict";

module.exports = {
  name: 'ping',
  description: 'Ping',
  execute: function execute(message, args) {
    message.channel.send('Pong!');
  }
};