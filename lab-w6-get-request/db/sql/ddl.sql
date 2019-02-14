CREATE DATABASE movies;

CREATE TABLE movieList (
  movieID       INT AUTO_INCREMENT,
  movieTitle    VARCHAR(250) NOT NULL,
  movieWatched  BOOLEAN NOT NULL,
  PRIMARY KEY     (movieID)
);