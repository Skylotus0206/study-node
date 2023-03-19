'user strict';
import express from 'express';
const router = express.Router();

import userRouter from './user.js';

router.use('/user', userRouter);

router.get('/', (req, res) => {
  res.send('hello, hhexpress');
  // res.sendFile(path.join(__dirname, './views/index.ejs'));
});

export default router;
