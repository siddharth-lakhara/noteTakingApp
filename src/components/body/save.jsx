import React from 'react';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.saveNote = this.saveNote.bind(this);
    this.setState = {
      noteStorage: [],
    };
  }

  saveNote() {
    const title = this.props.titleText;
    const message = this.props.noteText;
    // console.log(title, message);
    const noteObject = { title, message };
    // console.log(noteObject);
    const newNoteObject = this.state.noteStorage.concat([noteObject]);

    // this.setState({
    //   noteStorage: newNoteObject,
    // });
  }


  render() {
    return (
      <input type="button" className="saveNote" value="Save" onClick={this.saveNote} />
    );
  }
}

export default Save;
