const Movie = require('./Movieclass');

let movies = [
  new Movie("The Shawshank Redemption", "Frank Darabont", ["Tim Robbins", "Morgan Freeman"], "Two imprisoned men bond over a number of years."),
  new Movie("The Godfather", "Francis Ford Coppola", ["Marlon Brando", "Al Pacino"], "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."),
  new Movie("The Dark Knight", "Christopher Nolan", ["Christian Bale", "Heath Ledger"], "Batman battles the Joker to save Gotham.")
];

module.exports = movies;
