import React from 'react';
import './body.css';

class body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCharacters: 2,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  changeColor() {
    this.setState({
      color: 'red',
    });
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({
      leftCharacters: 2 - input.length,
      color: (this.state.leftCharacters <= 0) ? 'red' : 'white',
    });
  }

  render() {
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
      <input type="text" className="notes" placeholder={this.props.notePlaceholder} maxLength={this.props.maxTextLength} onChange={this.handleChange} style={{ backgroundColor: this.state.color }} />
      <br />
      <p>
        Characters left: {this.state.leftCharacters}, {this.state.color};
      </p>
      <br />
      <input type="button" className="saveNote" value="Save" />


    </div>
  )};

};

export default body;
