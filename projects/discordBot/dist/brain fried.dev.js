"use strict";

function brainFried() {
  var user = new User('snuffy');
  user.current.brainActivity = 20;

  if (user.current.brainActivity == 100) {
    Dom.dominate();
  }

  function Dom() {
    dominate = function dominate() {
      user.status = 'mindless';
      user.current.admin = dom;
    };
  }
}

function User(name) {
  name = name;
  status = 'operational';
  admin = name;

  current = function current() {
    brainActivity = 100;
    admin = name;
  };
}