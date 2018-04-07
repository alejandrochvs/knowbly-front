const express = require('express'),
  app = express(),
  api = require('./api/api'),
  port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use('/api',api);

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(port, (err => {
  console.log(`Server listening on port ${port}`);
}));
