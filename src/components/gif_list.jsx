import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className="gif-list">
        {this.props.gifList.map(elem => <Gif id={elem.id} selectGif={this.props.selectGif} /> )}
      </div>
    );
  }

}


export default GifList;
