import React from 'react';


export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null
    }
  }

  renderError() {
    if (!this.state.error) { return null; }

    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What's cooking good looking?" ref="createInput" />
        <button>create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput;
    const validateInput = this.validateInput(this.refs.createInput.value);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null })
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = "";
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
    } else if (this.props.todos.find(function(todo) {
      return todo.task === task
    })) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }

}