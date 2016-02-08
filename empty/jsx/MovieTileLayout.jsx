const React = require('react');

const MovieTitlelayout = (props) => {
  const img = (props.Poster && props.Poster !== 'N/A') ?
    props.Poster :
    'statics/img/placeholder.png';

  return (
    <div className = "movie-tile">
      <div className="movie-tile__img-container">
        <div className="movie-tile__img" style={{'backgroundImage': `url(${img})`}} />
      </div>


      <div className = "movie-tile__info">
        <h1 className = "movie-tile__title">{props.Title}</h1>
        <h2 className = "movie-tile__year">{props.Year}</h2>
        <div className = "movie-tile__stars">{props.Title}</div>
      </div>
    </div>
  );
}

module.exports = MovieTitlelayout;
