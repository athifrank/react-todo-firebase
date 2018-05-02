import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor(props){
    super(props);
    this.state={
      isEdit:false
    }
    this.taskContent=props.taskContent;
    this.taskId=props.taskId;
    this.handleDelete=this.handleDelete.bind(this);
    this.onEditClick=this.onEditClick.bind(this);
    this.onCancelClick=this.onCancelClick.bind(this);
  }

  onEditClick(){
    this.setState({isEdit:true});
  }

  handleDelete(id){
    this.props.delNote(id);
  }

  onCancelClick(){
    this.setState({isEdit:false});
  }

  onSaveClick(id,val){
   this.props.editNote(id,val);
    this.setState({isEdit:false});
  }

  renderEditAction(){
                if(this.state.isEdit){
              return(
                     <input type="text"  ref="editInput" 
                     defaultValue={this.taskContent} />
                );
                  }
          return(
           <h1 id={this.taskId}>{this.taskContent} 
         </h1>
          );
   }

  renderActionSec(){

    if(this.state.isEdit){
      return(
               <div>
               <button style={{cursor:'pointer'}} onClick={()=>this.onSaveClick(this.taskId,this.refs.editInput.value)}>Save</button>
               <button style={{cursor:'pointer'}} onClick={this.onCancelClick}>Cancel</button>
              </div>
        );
        }

        return(
               <div className="editAct">
               <button style={{cursor:'pointer'}} onClick={this.onEditClick}>Edit</button>
               <button style={{cursor:'pointer'}} onClick={()=>this.handleDelete(this.taskId)}>Delete</button>
               </div>
      );
      }

  render() {
    return (
      <div className="App">
         {this.renderEditAction()}
          {this.renderActionSec()}
      </div>
    );
  }
}

export default Task;
