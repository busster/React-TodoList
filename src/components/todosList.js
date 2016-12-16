import React from 'react';
import TodosListHeader from './todosListHeader';
import TodosListItem from './todosListItem';

export default class TodosList extends React.Component {
  renderItems() {
    var self = this
    var todos = this.props.todos.map(function(todo, index) {
      return <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted} toggleTask={self.props.toggleTask} saveTask={self.props.saveTask} deleteTask={self.props.deleteTask} />
    })
    return todos
  }


  render() {
    return (
      <table className="table">
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}