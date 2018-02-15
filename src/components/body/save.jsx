import React from 'react';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote() {
    const title = this.props.titleText;
    const message = this.props.noteText;
    const noteObject = { title, message };
    this.props.clearContent();
    this.props.updateNoteStorage(noteObject);
    this.props.changeState();
  }

  render() {
    return (
      <input type="button" className="saveNote" value="Save" onClick={this.saveNote} />
    );
  }
}

export default Save;
