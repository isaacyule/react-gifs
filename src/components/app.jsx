import React, { Component } from 'react';

import Search from './search.jsx';

import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifList: [],
      selectedGif: ""
    };
  }

  search = (event) => {

    const query = document.getElementById("search").value;

    const results = giphy("bvDpUBsZqbtoDblhUJIJCp0opg98Izah").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifList: res.data
      });
    });

  }

  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <Search search={this.search} />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
