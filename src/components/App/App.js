import React, { Component } from 'react';
import '../../css/index.css';
import TaskForm from '../TodoForm/TodoForm';
import TaskList from '../TodoList/TodoList';

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: 'Do something!',
        isDone: false,
      },
      {
        id: 2,
        title: 'I do not want to do anything',
        isDone: true,
      },     {
        id: 3,
        title: 'Please!',
        isDone: false,
      },
      {
        id: 4,
        title: 'well... fine!',
        isDone: true,
      }
    ],
  };
  

  render() {
    return (
      <>
        <TaskList
          list={this.state.list}
          onDelete={this.deleteTodo}
          onToggle={this.switchColor}
        />
        <TaskForm
          onAdd={this.addTask}
        />
      </>
    )    
  }

  deleteTodo = (id) => {
    this.setState({
      list: this.state.list.filter((task) => task.id !== id),
    });
  }

  addTask = (newTask) => {
    this.setState({
      list: [...this.state.list, { ...newTask, id: Date.now() }],
    })
  }

  switchColor = (id) => {
    const newList = this.state.list.map((task) => (
      task.id !== id ? task : { ...task, isDone: !task.isDone }
    ));

    this.setState({
      list: newList,
    })
  }
}
