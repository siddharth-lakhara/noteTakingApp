import React from 'react';
import PropTypes from 'prop-types';
import './showNotes.css';

class ShowNotes extends React.Component {
  render() {
    return (
      this.props.noteStorage.map((elem, id) => (
        <div>
          <div className="notesTitle">
            <input
              type="button"
              className="titleButton"
              value={elem.title}
              onClick={this.props.editNotes}
              id={elem.key}
            />

          </div>
          <div className="notesMessage">
            {elem.message}
          </div>
        </div>
      ))
    );
  }
}

ShowNotes.propTypes = {
  noteStorage: PropTypes.array.isRequired,
  editNotes: PropTypes.func.isRequired,
};
export default ShowNotes;
