import React, { Component } from 'react';
import * as firebase from 'firebase';
import Task from './task/Task';
import Taskform from './taskForm/Taskform';
import {DB_CONFIG} from './config/config';

class App extends Component {
  constructor(props){
    super(props);

    this.app=firebase.initializeApp(DB_CONFIG);
    this.database=this.app.database().ref().child('task');

    this.state={
      tasks:[]
    }
    this.addNote=this.addNote.bind(this);
    this.delNote=this.delNote.bind(this);
    this.editNote=this.editNote.bind(this);
  }


   componentWillMount(){
    const prevState=this.state.tasks;

     this.database.on('child_added',snap=>{
      prevState.push({
        id:snap.key,
        taskContent:snap.val().taskContent
      });
      this.setState({
        tasks:prevState
      })
     })

     this.database.on('child_removed',snap=>{
      for(let i=0;i<prevState.length;i++){
        if(prevState[i].id===snap.key){
          prevState.splice(i,1);
        }
      }
      this.setState({
        tasks:prevState
      })
     })

     
   } 

  addNote(task){
    this.database.push().set({taskContent:task});
  }

  delNote(id){
    this.database.child(id).remove();
  }

  editNote(id,val){
    const prevState=this.state.tasks;
    for(let i=0;i<prevState.length;i++){
      if(prevState[i].id===id){
        let post={
          taskContent:val
        }
       firebase.database().ref('task/'+id).set(post);
      }
    }
    window.location.reload();
  }
  
 
  render() {
    return (
      <div >
         <h1>React firebase-todo app</h1>
         {this.state.tasks.map((task)=>{
          return(
           <Task 
           taskContent={task.taskContent} 
           taskId={task.id} 
           key={task.id}
            delNote={this.delNote}
            editNote={this.editNote}
           />
          )
         })}
         <br/><br/>
         <div>
         <Taskform addNote={this.addNote}/>
         </div>
      </div>
    );
  }
}

export default App;
