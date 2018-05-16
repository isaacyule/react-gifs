import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Gif">
        <img src={this.props.id} alt=""/>
      </div>
    );
  }

}

export default Gif
