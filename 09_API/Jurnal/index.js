const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./movies');
const Movie = require('./Movieclass');

const app = express();
app.use(bodyParser.json());

app.get('/api/Movies', (req, res) => {
  res.json(movies);
});

app.get('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    res.json(movies[id]);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.post('/api/Movies', (req, res) => {
  const { title, director, stars, description } = req.body;
  const newMovie = new Movie(title, director, stars, description);
  movies.push(newMovie);
  res.status(201).send("Movie added");
});

app.delete('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    movies.splice(id, 1);
    res.send("Movie deleted");
  } else {
    res.status(404).send("Movie not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Web API Movie sedang berjalan. Gunakan endpoint /api/Movies');
});

