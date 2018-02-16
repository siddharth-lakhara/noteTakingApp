import React from 'react';
import PropTypes from 'prop-types';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote() {
    const key = this.props.noteId;
    const title = this.props.titleText;
    const message = this.props.noteText;
    const noteObject = { key, title, message };
    this.props.clearContent();
    this.props.updateNoteStorage(noteObject);
    this.props.changeState(0);
  }

  render() {
    return (
      <input type="button" className="saveNote" value="Save" onClick={this.saveNote} />
    );
  }
}

Save.propTypes = {
  titleText: PropTypes.string.isRequired,
  noteText: PropTypes.string.isRequired,
  clearContent: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  updateNoteStorage: PropTypes.func.isRequired,
  noteId: PropTypes.number.isRequired,
};
export default Save;
