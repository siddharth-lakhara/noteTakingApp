import React from 'react';
import './history.css';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.changeState();
  }

  render() {
    return (
      <div className="historyBody" >
        {this.props.noteStorage.map(elem => (
          <div>
            <div className="notesTitle">
              <strong>Title: </strong>
              {elem.title}
            </div>
            <div className="notesMessage">
              {elem.message}
            </div>
          </div>
          ))}
        <div className="goBackButton">
          <input type="button" value="Create Another notes" onClick={this.goBack} />
        </div>
      </div>
    );
  }
}

export default History;

// EDITED
// {
//   this.props.noteStorage.map((title, message) => (
//     <div>
//       <div className="notesTitle">
//         <strong>Title: </strong>
//         {title}
//       </div>
//       <div className="notesMessage">
//         {message}
//       </div>
//     </div>
//   ))
// }
