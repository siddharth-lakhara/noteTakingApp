import React from 'react';
import './footer.css';

class footer extends React.Component {
  render() {
    return (
      <div className="bottomClass">
        {this.props.text}
      </div>
    );
  }
}

export default footer;
