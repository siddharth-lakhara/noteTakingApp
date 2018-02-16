import React from 'react';

import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';

import History from './components/history/main/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNotes: 1,
      noteStorage: [],
      key: 1,
      titleText: '',
      noteText: '',
      oldNoteKey: 0,
    };
    this.changeState = this.changeState.bind(this);
    this.updateNoteStorage = this.updateNoteStorage.bind(this);
    this.clearContents = this.clearContents.bind(this);
    this.editNotes = this.editNotes.bind(this);
    this.updateOldNotes = this.updateOldNotes.bind(this);
  }

  updateNoteStorage(newNotesArray) {
    this.setState({
      noteStorage: [...this.state.noteStorage, newNotesArray],
      key: this.state.key + 1,
    });
  }

  changeState(newState) {
    this.setState({
      addNotes: newState,
    });
  }

  editNotes(key) {
    this.setState({
      titleText: this.state.noteStorage[key - 1].title,
      noteText: this.state.noteStorage[key - 1].message,
      oldNoteKey: key,
    });
  }

  updateOldNotes(newNotesArray) {
    const oldNotesObject = this.state.noteStorage;
    // console.log('newNotesArray: ', newNotesArray);
    // console.log('oldNotesObject: ', oldNotesObject);
    // console.log('Verify Correct element: ', oldNotesObject[this.state.oldNoteKey - 1]);
    oldNotesObject[this.state.oldNoteKey - 1] = newNotesArray;
    this.setState({
      noteStorage: oldNotesObject,
      oldNoteKey: 0,
    });
  }

  clearContents() {
    this.setState({
      titleText: '',
      noteText: '',
    });
  }

  render() {
    if (this.state.addNotes === 1) {
      return (
        <div className="App">
          <HeaderComponent title="Note maker application" />
          <BodyComponent
            emText="Please type your note below"
            maxTextLength={5}
            notePlaceholder="Your note here"
            changeState={this.changeState}
            updateNoteStorage={this.updateNoteStorage}
            noteId={this.state.key}
            titleText={this.state.titleText}
            noteText={this.state.noteText}
            titlePlaceHolder="Note title here"
            clearContents={this.clearContents}
          />
          <FooterComponent
            text="About Us"
          />
        </div>
      );
    } else if (this.state.addNotes === 2) {
      return (
        <div className="App">
          <HeaderComponent title="Note maker application" />
          <BodyComponent
            emText="Please type your note below"
            maxTextLength={5}
            notePlaceholder="Your note here"
            changeState={this.changeState}
            updateNoteStorage={this.updateOldNotes}
            noteId={this.state.key}
            titleText={this.state.titleText}
            noteText={this.state.noteText}
            titlePlaceHolder="Note title here"
            clearContents={this.clearContents}
          />
          <FooterComponent
            text="About Us"
          />
        </div>
      );
    }

    return (
      <div className="App">
        <HeaderComponent title="Note History" />
        <History
          changeState={this.changeState}
          noteStorage={this.state.noteStorage}
          editNotes={this.editNotes}
        />
      </div>
    );
  }
}

export default App;
