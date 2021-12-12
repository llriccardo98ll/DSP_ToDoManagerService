'use strict';


/**
 * Retrieve the tasks assigned to the user with ID userId
 * This operation allows an authenticated user to retrieve the tasks that has been assigned to her. A pagination mechanism is implemented to limit the size of messages.
 *
 * userId Long ID of the user
 * pageNo Integer The id of the requested page (if absent, the first page is returned) (optional)
 * returns inline_response_200_2
 **/
exports.getAssignedTasks = function (userId, pageNo) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "next": "next",
      "totalItems": 1,
      "totalPages": 0,
      "currentPage": 6,
      "tasks": [{
        "important": true,
        "owner": {
          "password": "password",
          "$schema": "$schema",
          "name": "name",
          "id": 6,
          "email": ""
        },
        "private": true,
        "projects": ["Personal", "Personal"],
        "$schema": "$schema",
        "description": "description",
        "id": 0,
        "completed": false,
        "deadline": "deadline",
        "assignedTo": [null, null]
      }, {
        "important": true,
        "owner": {
          "password": "password",
          "$schema": "$schema",
          "name": "name",
          "id": 6,
          "email": ""
        },
        "private": true,
        "projects": ["Personal", "Personal"],
        "$schema": "$schema",
        "description": "description",
        "id": 0,
        "completed": false,
        "deadline": "deadline",
        "assignedTo": [null, null]
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information about a user
 * The available information (password excluded) about the user specified by userId is retrieved.
 *
 * userId Long ID of the user to get
 * returns User
 **/
exports.getSingleUser = function (userId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password": "password",
      "$schema": "$schema",
      "name": "name",
      "id": 6,
      "email": ""
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the tasks created by the user with ID userId
 * This operation allows an authenticated user to retrieve the tasks that she has created. A pagination mechanism is implemented to limit the size of messages.
 *
 * userId Long ID of the user
 * pageNo Integer The id of the requested page (if absent, the first page is returned) (optional)
 * returns inline_response_200_2
 **/
exports.getUserTasks = function (userId, pageNo) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "next": "next",
      "totalItems": 1,
      "totalPages": 0,
      "currentPage": 6,
      "tasks": [{
        "important": true,
        "owner": {
          "password": "password",
          "$schema": "$schema",
          "name": "name",
          "id": 6,
          "email": ""
        },
        "private": true,
        "projects": ["Personal", "Personal"],
        "$schema": "$schema",
        "description": "description",
        "id": 0,
        "completed": false,
        "deadline": "deadline",
        "assignedTo": [null, null]
      }, {
        "important": true,
        "owner": {
          "password": "password",
          "$schema": "$schema",
          "name": "name",
          "id": 6,
          "email": ""
        },
        "private": true,
        "projects": ["Personal", "Personal"],
        "$schema": "$schema",
        "description": "description",
        "id": 0,
        "completed": false,
        "deadline": "deadline",
        "assignedTo": [null, null]
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information about the users
 * The available information (passwords excluded) about all the users is retrieved.
 *
 * returns List
 **/
exports.getUsers = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "password": "password",
      "$schema": "$schema",
      "name": "name",
      "id": 6,
      "email": ""
    }, {
      "password": "password",
      "$schema": "$schema",
      "name": "name",
      "id": 6,
      "email": ""
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

