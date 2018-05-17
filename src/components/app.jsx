import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search.jsx';
import GifList from './gif_list.jsx';
import Gif from './gif.jsx';

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

    giphy("bvDpUBsZqbtoDblhUJIJCp0opg98Izah").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {

      this.setState({
        gifList: res.data
      })

    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    })
  }

  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <Search search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifList={this.state.gifList} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
