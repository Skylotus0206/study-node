'use strict';
import express from 'express';
import upload from '../middlewares/multer.js';

const router = express.Router();

//@ array middleware
router.post(
  '/',
  upload.fields([{ name: 'image1' }, { name: 'image2' }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
  }
);

//@ single middleware
// router.post('/upload', upload.single('image'), (req, res) => {
//   console.log(req.file, req.body);
//   res.send('ok');
// });

export default router;
