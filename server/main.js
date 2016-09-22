import express from 'express';
import { getData } from './api';


let currentApi = getData;

const app = express();

app.get('/', (req, res) => {
  res.send(currentApi());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

if(module.hot) {
  module.hot.accept('./api', () => {
    const newGetData = require('./api').getData;
    currentApi = newGetData;
  })
}
