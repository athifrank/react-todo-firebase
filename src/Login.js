import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import { app, facebookProvider,googleProvider } from './config/config';

class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.setCurrentUser=this.setCurrentUser.bind(this);
    this.authWithGoogle=this.authWithGoogle.bind(this);
    this.state = {
      redirect: false,
      authenticated: false,
      currentUser: null
    }
  }


setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  authWithFacebook() {
    app.auth().signInWithPopup(facebookProvider)
      .then((user, error) => {
        if (error) {
          //this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
          console.log(error);
        } else {
          this.setCurrentUser(user)
          this.setState({ redirect: true })
        }
      })
  }


   authWithGoogle() {
    app.auth().signInWithPopup(googleProvider)
      .then((user, error) => {
        if (error) {
          //this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
          console.log(error);
        } else {
          this.setCurrentUser(user)
          this.setState({ redirect: true })
        }
      })
  }


  render() {

    if (this.state.redirect === true) {
      return <Redirect to='/home'/>
    }

    return (
      <div className="container">
        <div className="row" style={{marginTop:'87px'}}>
        <div className="col-sm-4">
         <div className="card">
          <h5 className="card-header" style={{textAlign: 'center'}}>Login Options</h5>
          <div className="card-body">
            <button className="btn btn-primary" 
             onClick={() => { this.authWithFacebook() }}>Log In with Facebook</button><br/><br/>
             <button className="btn btn-danger" 
             onClick={() => { this.authWithGoogle() }}>Log In with Gmail</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Login
