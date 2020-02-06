import React, { Component } from 'react';
import './App.css';
import Header               from './Header';
import Home                 from './home';
import Footer               from './Footer';

class App extends Component {

  state = {
    passToEncrypt: ''
  };

  handleChangePassToEncrypt = (value) => {
    this.setState({
      passToEncrypt: value
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Home
          passToEncrypt={this.state.passToEncrypt}
          setPassToEncrypt={this.handleChangePassToEncrypt}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
