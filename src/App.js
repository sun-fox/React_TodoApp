import React from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
  state = {
    todos:[
    {
      id:1,
      title:"React JS course",
      completed:false,
    },
    {
      id:2,
      title:"Blockchain course with solidity",
      completed:true,
    },
    {
      id:3,
      title:"ML waste categorization",
      completed:false,
    }]
  }
  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <h1>TodoApp</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
