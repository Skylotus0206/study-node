'user strict';
import express from 'express';
import userRouter from './user.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

//@ router
router.use('/user', userRouter);

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

// single middleware
// router.post('/upload', upload.single('image'), (req, res) => {
//   console.log(req.file, req.body);
//   res.send('ok');
// });

// array middleware
router.post(
  '/upload',
  upload.fields([{ name: 'image1' }, { name: 'image2' }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
  }
);

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

export default router;
