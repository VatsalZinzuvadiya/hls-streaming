const express = require('express');
const authRoute = require('./auth');
const userRoute = require('./user')

const nonAuthRouter = express.Router();
const authRouter = express.Router();

const routerV0 = express.Router();

// Non-auth routes
nonAuthRouter.use('/auth', authRoute);

// protected routes
authRouter.use('/user', userRoute);


routerV0.use('/v0/api', nonAuthRouter);
routerV0.use('/v0/api', authRouter);

module.exports = routerV0;
