import express from 'express';
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.listen(app.get('port'), (req, res) => {
  console.log('connecting to ' + app.get('port'));
});
