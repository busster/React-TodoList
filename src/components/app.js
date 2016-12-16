import React from 'react';
import CreateTodo from './createTodo';
import TodosList from './todosList';

const todos = [
  {
    task: "Be awesome",
    isCompleted: true
  },
  {
    task: "Rule the world",
    isCompleted: false
  }

]



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="main-container">
        <h1>Simple Todos</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodosList 
          todos={this.state.todos} 
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = this.state.todos.find(function(todo) {
      return todo.task === task
    })
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos })
  }

  saveTask(oldTask, newTask) {
    const foundTodo = this.state.todos.find(function(todo) {
      return todo.task === oldTask
    })
    foundTodo.task = newTask
    this.setState({ todos: this.state.todos })
  }

  deleteTask(task) {
    const foundTodoIndex = this.state.todos.findIndex(function(todo) {
      return todo.task === task
    })
    this.state.todos.splice(foundTodoIndex, 1);
    this.setState({ todos: this.state.todos })
  }

}











