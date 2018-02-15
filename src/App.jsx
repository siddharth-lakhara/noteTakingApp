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
      maxTextLength={2}
      notePlaceholder="Your note here"
    />
    <FooterComponent
      text="About Us"
    />
  </div>
);

export default App;
