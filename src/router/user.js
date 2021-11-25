const controller = require('../controller/user');
const express = require('express');
const UserRouter = express.Router();

UserRouter.post('/register', controller.signupCustomer);
UserRouter.post('/signin', controller.signinCustomer);

module.exports = UserRouter;