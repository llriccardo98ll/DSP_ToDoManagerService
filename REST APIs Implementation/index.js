'use strict';

var path = require('path');
var http = require('http');
var fs = require("fs");
var passport = require('passport');
var { Validator, ValidationError } = require('express-json-validator-middleware');

var oas3Tools = require('oas3-tools');
var serverPort = 3000;

var taskController = require(path.join(__dirname, 'controllers/Tasks'));
var userController = require(path.join(__dirname, 'controllers/Users'));
var autenticatorController = require(path.join(__dirname, 'controllers/Usersauthenticator'));

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
var app = expressAppConfig.getApp();

// Set validator middleware
var taskSchema = JSON.parse(fs.readFileSync(path.join('.', 'json-schemas', 'task_schema.json')).toString());
var userSchema = JSON.parse(fs.readFileSync(path.join('.', 'json-schemas', 'user_schema.json')).toString());
var validator = new Validator({ allErrors: true });
validator.ajv.addSchema([userSchema, taskSchema]);
var validate = validator.validate;

//Set authentication middleware
app.use(passport.initialize());

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
  };
  
var JwtStrategy = require('passport-jwt').Strategy;
var opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = '6xvL4xkAAbG49hcXf5GIYSvkDICiUAR6EdR5dLdwW7hMzUjjMUe9t6M5kSAYxsvX';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    return done(null, jwt_payload.user);
   })
);

// Route methods
app.get('/api/task/public', taskController.getPublicTasks);


// Error handlers for validation and authentication errors
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(400).send(err);
    } else next(err);
});

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        var authErrorObj = { errors: [{ 'param': 'Server', 'msg': 'Authorization error' }] };
        res.status(401).json(authErrorObj);
    } else next(err);
});

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});


