import React from "react";
import Movie from "../interfaces/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
}

interface MovieListState {
  movies: any[];
  isLoaded: boolean;
}

export default class MovieList extends React.Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/movies");
    const movies = await response.json();
    this.setState({
      movies: movies,
      isLoaded: true,
    });
  }

  render(): JSX.Element {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row">
          {this.state.movies.map((movie:Movie) => (
            <MovieCard  {...movie} />
          ))}
        </div>
      );
    }
  }
}