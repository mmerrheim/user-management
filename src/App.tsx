import * as React from 'react';
import './App.scss';

import MenuBar from './components/menuBar/MenuBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MenuBar />
      </div>
    );
  }
}

export default App;
