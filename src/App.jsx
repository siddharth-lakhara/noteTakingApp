import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';

const App = () => (
  <div className="App">
    <HeaderComponent title="Note maker application" />
    <BodyComponent
      emText="Please type your note below"
      maxTextLength="2"
      notePlaceholder="Your note here"
    />
    Verify Rendering
    <FooterComponent
      text="Footer"
    />
  </div>
  /* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
  </p> */
);

export default App;
