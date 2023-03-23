'use strict';
import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    console.log('GET / 요쳥에서만 실행됩니다. ');
    res.send('Welcome to study-node');
    next();
  } catch (error) {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
  }
});

router.post('/', (req, res, next) => {
  try {
    res.send('POST / Welcome to study-node');
    next();
  } catch (error) {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
  }
});

export default router;
