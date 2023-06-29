import { Container, Movie, MovieList } from "./styles";
import APIKey from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    //https://api.themoviedb.org host
    // /3 - API Version
    // /Movie/Popular - endpoint
    // ? query param

    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Filmes - Top 20 </h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </Link>

              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
