import React from 'react';
import './header.css';

class header extends React.Component {
  render() {
    return (
      <div className="topClass">
        {this.props.title}
      </div>
    );
  }
}

export default header;
