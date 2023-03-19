'user strict';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const router = express.Router();

//@ router
// app.use(cookieParser());
app.use('/', indexRouter);
app.use(logErrors);

app.set('port', process.env.PORT || 3000); //@ 설정 포트가 연결이 안되면 3000번으로 연결

app.listen(app.get('port'), (req, res) => {
  console.log('Server is connecting to port ' + app.get('port'));
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
