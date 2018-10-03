import * as React from 'react';
import './App.scss';

// import logo from './logo.svg';
import MenuBar from './components/menuBar/MenuBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MenuBar />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
