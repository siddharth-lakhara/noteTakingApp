import React from 'react';

class PrintOutput extends React.Component {
  render() {
    return (
      Object.entries(this.props.noteStorage).map(([title, message]) => {
        console.log('title: ', title, ' message: ', message);
        return (
          <div className="destructuredNotes">
            <p><strong>Title: {title} </strong></p>
            <p>{message}</p>
          </div>
        );
      })
    );
  }
}

export default PrintOutput;
