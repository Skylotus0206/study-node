'user strict';
import express from 'express';
import userRouter from './user.js';
const router = express.Router();

//@ router
router.use('/user', userRouter);

// router.use((req, res, next) => {
//   console.log('모든 요청에 다 실행됩니다. ');
//   next();
// });

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

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

export default router;
