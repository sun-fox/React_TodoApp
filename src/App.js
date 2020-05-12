import React from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
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
  // toggle complete
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
  }
  // delete Todo
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
  }
  // Add Todo
  addTodo=(title)=>{
    // console.log(title);
    const newTodo = {
      id : this.state.todos.length+1,
      title: title,
      completed: false 
    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }

  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        {/* <div className="container"> */}
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      // </div>
    );
  }
}

export default App;
