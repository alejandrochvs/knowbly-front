const express = require('express'),
  app = express(),
  api = require('./api/api'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3001;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, (err => {
  console.log(`Server listening on port ${port}`);
}));
