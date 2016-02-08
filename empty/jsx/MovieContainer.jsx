const React = require('react');
const omdb = require('omdb-client');

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    omdb.get({
      id: this.props.id
    }, (err, data) => {
      this.setState({movie:data});
    })
  }

  render() {
    return (
      <img src={this.state.movie.Poster}/>
    );
  }

}

module.exports = MovieContainer;
