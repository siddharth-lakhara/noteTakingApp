import React from 'react';
import './body.css';
import Save from './save';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Characters: 0,
      color: "white",
      maxCharacters: props.maxTextLength,
      titleText: "",
      noteText: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.clearContents = this.clearContents.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({
      Characters: input.length,
      noteText: input,
    });
  }

  titleChange(event) {
    const input = event.target.value;
    this.setState({
      titleText: input,
    });
  }

  clearContents() {
    this.setState({
      Characters: 0,
      color: "white",
      titleText: "",
      noteText: "",
    });
  }

  render() {
   const color = ((this.state.Characters) === this.state.maxCharacters) ? 'red' : 'white';
  return (
    <div className="contentPane">
      <p className="noteTitle">
        Note Title
      </p>
      <input type="text" className="tasks" value={this.state.titleText} onChange={this.titleChange} />
      <br />
      <br />
      <em> {this.props.emText} </em>
      <br />
      <br />
      <input type="text" className="notes" value={this.state.noteText} placeholder={this.props.notePlaceholder} maxLength={this.props.maxTextLength} onChange={this.handleChange} style={{backgroundColor: color}} />
      <br />
      <p>
        Characters left: {this.state.maxCharacters - this.state.Characters}
      </p>
      <br />
      <Save 
        titleText={this.state.titleText} 
        noteText={this.state.noteText}
        clearContent = {this.clearContents}
        changeState= {this.props.changeState}
        updateNoteStorage={this.props.updateNoteStorage}
      />
    </div>
  )};

};

export default Body;
