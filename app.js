const express = require('express');
const app = express();

app.get('/', (req, res) => {
  db.collection('stocks').find().toArray((err,result) => {
    if (err) return console.log(err);
    res.render('index.html', {stocks: result});
  });
});

app.post('/stocks', (req, res) => {
  db.collection('stocks').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});
