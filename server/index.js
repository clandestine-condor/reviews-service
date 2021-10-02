const express = require('express');
const app = express();
const port = 3000;

var reviews = require('./reviews');

app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})