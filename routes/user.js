'use strict';
import express from 'express';
const router = express.Router();

router.get('/urlInfo', function (req, res, next) {
  console.log('originalUrl : ' + req.originalUrl);
  console.log('baseUrl : ' + req.baseUrl);
  console.log('path : ' + req.path);
  res.send('respond with a resource');
});

export default router;
