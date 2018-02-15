import React from 'react';
import './body.css';

class body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Characters: 0,
      color: "white",
      maxCharacters: props.maxTextLength,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({
      Characters: input.length,
    });
  }

  render() {
   const color = ((this.state.Characters) === this.state.maxCharacters) ? 'red' : 'white';
  return (
    <div className="contentPane">
      <p className="noteTitle">
        Note Title
      </p>
      <input type="text" className="tasks" placeholder="Tasks for today" />
      <br />
      <br />
      <em> {this.props.emText} </em>
      <br />
      <br />
      <input type="text" className="notes" placeholder={this.props.notePlaceholder} maxLength={this.props.maxTextLength} onChange={this.handleChange} style={{backgroundColor: color}} />
      <br />
      <p>
        Characters left: {this.state.maxCharacters - this.state.Characters}
      </p>
      <br />
      <input type="button" className="saveNote" value="Save" />


    </div>
  )};

};

export default body;
