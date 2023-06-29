import { Container, Movie, MovieList } from "./styles";
import { useEffect, useState } from "react";
import { APIKey } from "../../config/key";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [movie, setMovies] = useState({ genres: [] });
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          title,
          poster_path,
          overview,
          release_date,
          genres,
          original_title,
        } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          genres: genres.map((genre) => genre.name),
          title_original: original_title,
        };
        // console.log(data.results);
        setMovies(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        {movie && <img src={movie.image} alt={movie.sinopse} />}
        <div className="details">
          <h1 className="title">{movie.title}</h1>
          <span className="title-original">{movie.title_original}</span>
          <span className="genero">
            Gênero:
            <ul className="lista">
              {movie.genres.map((genre, index) => (
                <li key={index}>
                  <p className="genres">{genre + ",  "}</p>
                </li>
              ))}
            </ul>
          </span>
          <br />
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>

          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
