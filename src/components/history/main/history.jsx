import React from 'react';
import PropTypes from 'prop-types';
import './history.css';
import ShowNotes from './showNotes';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.editNotes = this.editNotes.bind(this);
  }

  editNotes(event) {
    const key = event.target.id;
    this.props.editNotes(key);
    this.props.changeState(2);
  }

  changeState() {
    this.props.changeState(1);
  }

  render() {
    return (
      <div className="historyBody" >
        <ShowNotes
          noteStorage={this.props.noteStorage}
          editNotes={this.editNotes}
        />
        <div className="goBackButton">
          <input type="button" value="Create Another notes" onClick={this.changeState} />
        </div>
      </div>
    );
  }
}

History.propTypes = {
  changeState: PropTypes.func.isRequired,
  noteStorage: PropTypes.array.isRequired,
  editNotes: PropTypes.func.isRequired,
};

export default History;
