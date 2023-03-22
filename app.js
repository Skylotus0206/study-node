'use strict';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';


import indexRouter from './routes/index.js';

const app = express();
const router = express.Router();
// .env 파일을 읽어서 process.env로 만든다.
dotenv.config();

// path 경로: ES6는 따로 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// router
app.use('/', indexRouter);

// record requests and reponses to console
app.use(morgan('dev'));

// provide static files
app.use('/', express.static(path.join(__dirname, 'public')));

// body-parser (create req.body): read request body to process JSON and formdata
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create req.cookies: compare a signed cookie from browser to prove if the signature is provided from its server
app.use(cookieParser(process.env.COOKIE_SECRET));

// manage express-session
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
);

// manage port#: connect to 3000 if assigned port isn't operated
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), (req, res) => {
  console.log('Server is connecting to port ' + app.get('port'));
});
