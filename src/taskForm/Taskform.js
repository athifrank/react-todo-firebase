import React, { Component } from 'react';


class Taskform extends Component {
  constructor(props){
    super(props);
    this.state={
      newTaskContent:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.writeTask=this.writeTask.bind(this);
  }

  handleChange(e){
    this.setState({
     newTaskContent:e.target.value 
    })
  }
  writeTask(){
    this.props.addNote(this.state.newTaskContent);

    this.setState({
     newTaskContent:'' 
    })
  }

  render() {
    return (
      <div>
         <input 
          name="task"
          placeholder="add task"
          value={this.state.newTaskContent}
          onChange={this.handleChange}
         />
         <button
          onClick={this.writeTask}
         >Add task</button>
      </div>
    );
  }
}

export default Taskform;
