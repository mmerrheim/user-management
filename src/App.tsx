import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import Paper from './components/paper/Paper';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Paper>
          <h1>Ceci est un test</h1>
          <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
        </Paper>
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
