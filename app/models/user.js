'use strict';

module.exports = User;

function User(user){
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
}

