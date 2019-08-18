import React, { Component }  from 'react';
import './App.css';
import Header from './Header';
import Home   from './home';

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
      <div className="App">
        <Header />
        <Home
          passToEncrypt={this.state.passToEncrypt}
          setPassToEncrypt={this.handleChangePassToEncrypt}
        />
      </div>
    );
  }
}

export default App;
