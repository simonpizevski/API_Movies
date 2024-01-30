import express from 'express';
import { engine } from 'express-handlebars';
import { loadMovie, loadMovies } from './movies.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/movies', async (req, res) => {
  const movies = await loadMovies();
  res.render('movies', { movies });
});

app.get('/movies/:id', async (req, res) => {
  const movie = await loadMovie(req.params.id);
  res.render('movie', { movie });
});

app.get('/contact', async (req, res) => {
  res.render('contact');
});

app.use('/static', express.static('./static'));

app.get('*', async (req, res) => {
  res.status(404).render('404');
});

export default app;
