import React from "react";
import Movie from "../interfaces/movie";

export default class MovieCard extends React.Component<Movie> {

  openMovie = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(this.props.id);
    console.log(this.props.name);
  }

  render(): JSX.Element {
    return (
      <div className="col-md-4" key={this.props.id}>
        <div className="card mb-4 shadow-sm">
          <img src={this.props.thumbnail} className="card-img-top" alt={this.props.name} />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-genre">{this.props.genre}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a type="button" className="btn btn-sm btn-outline-secondary" href={ `/${this.props.id}`}>View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}