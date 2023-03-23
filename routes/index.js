'use strict';
import express from 'express';
import userRouter from './user.js';
import multipartRouter from './multipart.js';
import homeRouter from './home.js';

const router = express.Router();

// router
router.use('/user', userRouter);
router.use('/upload', multipartRouter);
router.use('/', homeRouter);



export default router;
