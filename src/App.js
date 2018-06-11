import React, { Component } from 'react';
import { Button, Intent, Spinner, Dialog } from "@blueprintjs/core";
import './App.css';

class App extends Component {
  state = {
    dialog: {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Spinner intent={Intent.PRIMARY} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button intent={Intent.SUCCESS} onClick={this.handleOnButtonClick}>Hello World!</Button>
          <Dialog icon="info-sign" onClose={this.handleOnClose} {...this.state.dialog} >Hello </Dialog>
        </p>
      </div>
    );
  }
  handleOnButtonClick = () => {this.setState({dialog: {...this.state.dialog, isOpen: true}})}
  handleOnClose = () => {this.setState({dialog: {...this.state.dialog, isOpen: false}})}
}

export default App;
