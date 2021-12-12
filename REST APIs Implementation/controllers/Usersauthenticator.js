'use strict';

var utils = require('../utils/writer.js');
var Usersauthenticator = require('../service/UsersauthenticatorService');

module.exports.loginUser = function loginUser (req, res, next, username, password) {
  Usersauthenticator.loginUser(username, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUser = function logoutUser (req, res, next) {
  Usersauthenticator.logoutUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
