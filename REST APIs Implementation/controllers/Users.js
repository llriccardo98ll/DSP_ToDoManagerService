'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getAssignedTasks = function getAssignedTasks (req, res, next, userId, pageNo) {
  Users.getAssignedTasks(userId, pageNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSingleUser = function getSingleUser (req, res, next, userId) {
  Users.getSingleUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserTasks = function getUserTasks (req, res, next, userId, pageNo) {
  Users.getUserTasks(userId, pageNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next) {
  Users.getUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
