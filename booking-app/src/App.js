import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import getRoutes from './routes';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          { getRoutes() }
        </BrowserRouter>
    );
  }
}

export default App;
