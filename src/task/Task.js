import React, { Component } from 'react';


class Task extends Component {
  constructor(props){
    super(props);
    this.taskContent=props.taskContent;
    this.taskId=props.taskId;
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleDelete(id){
    this.props.delNote(id);
  }

  render() {
    return (
      <div className="App">
         <h1 id={this.taskId}>{this.taskContent} 
         <button style={{cursor:'pointer'}} onClick={()=>this.handleDelete(this.taskId)}>Delete</button>
         </h1>

      </div>
    );
  }
}

export default Task;
