import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameForm} from './components/NameForm.js'

class App extends React.Component  {
   constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
   render(){
      return (
         <div className="App">
            <header className="App-header">
            <div>
               <h2>
                  Find the best Route for Bus
               </h2>
            </div>

            <form onSubmit={this.handleSubmit}>
               <input type="text" name="source" placeholder="Source" value={this.state.value} onChange={this.handleChange}  />
               <br />
               <input type="text" name="destination" placeholder="Destination" />
               <br />
               <input id="btn" type="submit" value="Search" />
            </form><br />
            <div className="map">
               <iframe src="https://maps.google.com/maps?q=singapore&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>      
            </div>      
            </header>
         </div>
      );
   }
}

export default App;
