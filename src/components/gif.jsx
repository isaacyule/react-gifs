import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) {
    super(props);

  }

  handleClick = () => {
    this.props.selectGif(this.props.id);
  }

  render() {
    return (
      <img className="gif" onClick={this.handleClick} src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} />
    );
  }

}

export default Gif;
