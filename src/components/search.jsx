import React, { Component } from 'react';
import giphy from 'giphy-api';

class Search extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Search">
        <input id="search" className="form-search" type="text" onChange={this.props.search} />
      </div>
    );
  }
}

export default Search;
