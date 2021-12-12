'use strict';


/**
 * Add a new task to the store
 *
 * body Task Task object that needs to be added to the store
 * returns List
 **/
exports.addTask = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "important" : true,
  "owner" : {
    "password" : "password",
    "$schema" : "$schema",
    "name" : "name",
    "id" : 6,
    "email" : ""
  },
  "private" : true,
  "projects" : [ "Personal", "Personal" ],
  "$schema" : "$schema",
  "description" : "description",
  "id" : 0,
  "completed" : false,
  "deadline" : "deadline",
  "assignedTo" : [ null, null ]
}, {
  "important" : true,
  "owner" : {
    "password" : "password",
    "$schema" : "$schema",
    "name" : "name",
    "id" : 6,
    "email" : ""
  },
  "private" : true,
  "projects" : [ "Personal", "Personal" ],
  "$schema" : "$schema",
  "description" : "description",
  "id" : 0,
  "completed" : false,
  "deadline" : "deadline",
  "assignedTo" : [ null, null ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Assign automatically the unassigned tasks in a balanced manner
 * The tasks, whose owner is the user who performed this request and that are not assigned to any user, are automatically assigned to the users of the service in a balanced manner.
 *
 * returns inline_response_200_1
 **/
exports.assign = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Assign a task to a user
 * The task with ID taskId is assigned to the user specified in the request body. This operation can only be performed by the owner.
 *
 * body User the user to whom the task is assigned
 * taskId Long ID of the task
 * no response value expected for this operation
 **/
exports.assignTaskToUser = function(body,taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Complete a task
 * The task with ID taskId is marked as completed. This operation can only be performed by an assignee of the task.
 *
 * taskId Long ID of the task
 * no response value expected for this operation
 **/
exports.completeTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a task
 * The task with ID taskId is deleted. This operation can only be performed by the owner.
 *
 * taskId Long ID of the task to delete
 * no response value expected for this operation
 **/
exports.deleteTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Return the public tasks
 * The operation to retrieve the list of all task are marked as public.  This operation does not require the authentication.
 *
 * pageNo Integer The id of the requested page (if absent, the first page is returned) (optional)
 * returns inline_response_200
 **/
exports.getPublicTasks = function(pageNo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tasks" : [ {
    "important" : true,
    "owner" : {
      "password" : "password",
      "$schema" : "$schema",
      "name" : "name",
      "id" : 6,
      "email" : ""
    },
    "private" : true,
    "projects" : [ "Personal", "Personal" ],
    "$schema" : "$schema",
    "description" : "description",
    "id" : 0,
    "completed" : false,
    "deadline" : "deadline",
    "assignedTo" : [ null, null ]
  }, {
    "important" : true,
    "owner" : {
      "password" : "password",
      "$schema" : "$schema",
      "name" : "name",
      "id" : 6,
      "email" : ""
    },
    "private" : true,
    "projects" : [ "Personal", "Personal" ],
    "$schema" : "$schema",
    "description" : "description",
    "id" : 0,
    "completed" : false,
    "deadline" : "deadline",
    "assignedTo" : [ null, null ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retreve a task
 * The task with ID taskId is retrieved. This operation can be performed on the task if at least one of the following three conditions is satisfied. 1) The task is public. 2) The user who performs the operation is the task's owner. 3) The user who performs the operation is a task's assignee.
 *
 * taskId Long ID of the task to retrieve
 * returns List
 **/
exports.getSingleTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "important" : true,
  "owner" : {
    "password" : "password",
    "$schema" : "$schema",
    "name" : "name",
    "id" : 6,
    "email" : ""
  },
  "private" : true,
  "projects" : [ "Personal", "Personal" ],
  "$schema" : "$schema",
  "description" : "description",
  "id" : 0,
  "completed" : false,
  "deadline" : "deadline",
  "assignedTo" : [ null, null ]
}, {
  "important" : true,
  "owner" : {
    "password" : "password",
    "$schema" : "$schema",
    "name" : "name",
    "id" : 6,
    "email" : ""
  },
  "private" : true,
  "projects" : [ "Personal", "Personal" ],
  "$schema" : "$schema",
  "description" : "description",
  "id" : 0,
  "completed" : false,
  "deadline" : "deadline",
  "assignedTo" : [ null, null ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retreve the users a task has been assigned to
 * The users to whom the task with ID taskId is assigned are retrieved. This operation can be performed only by the owner.
 *
 * taskId Long ID of the task to retrieve
 * returns List
 **/
exports.getUsersAssigned = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "$schema" : "$schema",
  "name" : "name",
  "id" : 6,
  "email" : ""
}, {
  "password" : "password",
  "$schema" : "$schema",
  "name" : "name",
  "id" : 6,
  "email" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a user from the assigned task
 * The user that is removed is the user, identified by userId, that was assigned to the task identified by taskId. This operation can be performed only by the owner.
 *
 * taskId Long ID of the assigned task
 * userId Long ID of the user to remove
 * no response value expected for this operation
 **/
exports.removeUser = function(taskId,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a task
 * The task with ID taskId is updated. This operation does not allow to mark a task as completed. This operation can be performed only by the owner.
 *
 * body Task The updated task object that needs to replace the old object
 * taskId Long ID of the task to update
 * no response value expected for this operation
 **/
exports.updateSingleTask = function(body,taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

