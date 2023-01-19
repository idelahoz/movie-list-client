import React from "react";
import Movie from "../interfaces/movie";
import withRouter from "../lib/withRouter";

interface MovieDetailProps {
  params: any;
  isLoaded: boolean;
  movie: Movie;
}

interface MovieDetailState {
  movie?: Movie;
}

class MovieDetail extends React.Component<MovieDetailProps, MovieDetailState> {

  constructor(props: MovieDetailProps) {
    super(props);
    this.state = {
      movie: undefined,
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3000/api/movies/${this.props.params.movieId}`);
    const movie = await response.json();
    this.setState({
      movie: movie,
    });
  }

  render(): JSX.Element {
    if (this.state.movie === undefined) {
      return <div>Loading...</div>;
    } else {
      return (<div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5>{this.state.movie.name}</h5>
          </div>

          <div className="project-info-box">
            <p><b>Owner:</b> {this.state.movie.owner }</p>
            <p><b>Market Price:</b> {this.state.movie.market_price}</p>
          </div>
        </div>

        <div className="col-md-7">
          <img src={this.state.movie.image} alt="project-image" className="rounded" /> { /* This images shows a CORS error in the browser console. But I figured it should be here instead of thumbnail */ }
          <div className="project-info-box">
            <p><b>Genres:</b> { this.state.movie.genre }</p>
          </div>
        </div>
      </div>)
    }
  }
}

export default withRouter(MovieDetail);