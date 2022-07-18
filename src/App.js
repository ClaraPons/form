import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const regex = new RegExp (/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName: ""
    }
  }

  handleEmailChange = (e) => {
      this.setState({
        email: e.target.value
      })
    regex.test(e.target.value) && this.setState({ emailIsValid: true})
    console.log(this.state.emailIsValid)
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
    e.target.value.length > 5 && this.setState({ passwordIsValid: true}, () =>{
      console.log(this.state.passwordIsValid)
    })
  }
  
  handleRememberMeChange = (e) => {
    this.setState({
      rememberMe: !this.state.rememberMe
    }, () => {
      console.log(this.state.rememberMe)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(
      this.state.emailIsValid && this.state.passwordIsValid && this.setState({ isSubmitted: true}, () =>{
        console.log(this.state.isSubmitted)
      })
    )
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }
  
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  render (){
    return(
      <div  class="m-5">
      <h1 class="text-center">Login</h1>
      {this.state.isSubmitted ? (
        <p class="d-flex justify-content-center mt-5 bg-success text-white p-3 m-5">Well done {this.state.firstName} {this.state.lastName} ! You are connected with the Email address : {this.state.email}</p> 
          ) : (
            <form class="was-validated d-flex flex-column align-items-center" onSubmit={this.handleSubmit} >
            <div class="col-md-4 mb-3">
              <label for="validationServer01" class="form-label">First Name</label>
              <input type="text" class="form-control is-valid" id="validationServer01" onChange={this.handleFirstNameChange} required/>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationServer02" class="form-label">Last Name</label>
              <input type="text" class="form-control is-valid" id="validationServer02" onChange={this.handleLastNameChange} required/>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationServer03" class="form-label">Email address</label>
              <input type="email" class="form-control is-valid" id="validationServer03" onChange={this.handleEmailChange} required/>
            </div>
            <div class="col-md-4 mb-4">
              <label for="validationServer04" class="form-label">Password</label>
              <input type="password" class="form-control is-valid" id="validationServer04" onChange={this.handlePasswordChange} required/>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="validationFormCheck1" />
              <label class="form-check-label" for="validationFormCheck1">Remember me</label>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary" type="submit" >Submit</button>
            </div>
      </form>
            )}
      </div>
    )

  
  }
}

export default App