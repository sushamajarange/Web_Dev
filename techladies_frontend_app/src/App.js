import React, { Component } from 'react';
import Menu from './component/Menu';
import About from './component/About';
import ContactUs from './component/ContactUs';
import './App.css';

class App extends Component {
 
  render(){
    return (
      <div className="App" >
        <header className="App-header">
          <Menu />
         
        </header>
        
      </div>
    );
 }

}

export default App;
