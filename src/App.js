import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         content: 0
      };

      this.handleClickAdd = this.handleClickAdd.bind(this);
      this.handleClickSubstract = this.handleClickSubstract.bind(this);
   }

   handleClickAdd() {
      this.setState(prevState => ({
         content: prevState.content + 1
      }));
   }

   handleClickSubstract() {
      this.setState(prevState => ({
         content: prevState.content - 1
      }));
   }

   render() {
      return (
         <div>
            <span className="value">{this.state.content}</span>
            <button id="inc" onClick={this.handleClickAdd}>
               Incrementa
            </button>
            <button id="inc" onClick={this.handleClickSubstract}>
               Disminuir
            </button>
         </div>
      );
   }
}

export default App;
