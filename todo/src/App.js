import React from 'react';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todo: []
    }
  }

  handleAddTodo = payload => {
    let item = {
      value: payload,
      status: false,
      id: uuidv4(),
      edit: false
    }
    this.setState({
      todo: [ ...this.state.todo, item]
    })
  }

  handleClick = (id, value ) => {
      const updatedTodo = this.state.todo.map(item => 
        item.id !== id ?
        item : {...item, status: !item.status}
        )

      this.setState ({
        todo: updatedTodo
      })  
  }

  handleRemove = id => {
    this.setState({
      todo: this.state.todo.filter(item => item.id !== id)
    })
  }

  handleUpdate = (data, value ) => {
    
    const updatedTodo = this.state.todo.map(item => 
      item.id !== data.id ?
      item : {...item, value: value, edit: !data.edit}
      )

    this.setState ({
      todo: updatedTodo
    })  
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Input buttonLabel="Add Todo" handleClick={this.handleAddTodo} />
        <List label='Todo App' data={this.state.todo.filter(item => !item.status)} handleClick={this.handleClick} handleRemove={this.handleRemove} handleUpdate={this.handleUpdate} />
        <List label='Completed' data={this.state.todo.filter(item => item.status)} handleClick={this.handleClick} handleRemove={this.handleRemove} handleUpdate={this.handleUpdate} />        
      </div>
    );
  }
}

export default App;
