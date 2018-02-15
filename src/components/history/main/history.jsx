import React from 'react';
import PrintOutput from './print';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.changeState();
  }

  render() {
    // console.log(this.printNotes());
    return (
      <div className="historyBody" >
        <div className="notesTitle">
          <pre> <PrintOutput notes={this.props.noteStorage} /> </pre>
        </div>
        <div className="goBackButton">
          <input type="button" value="Go Back" onClick={this.goBack} />
        </div>
      </div>
    );
  }
}

export default History;
