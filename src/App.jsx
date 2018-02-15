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
    };
    this.changeState = this.changeState.bind(this);
    this.updateNoteStorage = this.updateNoteStorage.bind(this);
  }

  updateNoteStorage(newNotesArray) {
    this.setState({
      noteStorage: [...this.state.noteStorage, [newNotesArray]],
    }, ()=>{
      console.log(this.state.noteStorage);
    });
  }

  changeState(){
    const newState = (this.state.addNotes)^1;
    this.setState({
      addNotes: newState,
    })
  };

  render() {
    if (this.state.addNotes) {
      return (
        <div className="App">
          <HeaderComponent title="Note maker application" />
          <BodyComponent
            emText="Please type your note below"
            maxTextLength={100}
            notePlaceholder="Your note here"
            changeState={this.changeState}
            updateNoteStorage={this.updateNoteStorage}
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
        />
        <FooterComponent
          text="About Us"
        />
      </div>
    );
  }
}

export default App;
