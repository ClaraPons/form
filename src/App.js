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
     // rememberMe: !this.state.rememberMe
      rememberMe: e.target.checked
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
      <div  className="m-5">
      <h1 className="text-center">Login</h1>
      {this.state.isSubmitted ? (
        <p className="d-flex justify-content-center mt-5 bg-success text-white p-3 m-5">Well done {this.state.firstName} {this.state.lastName} ! You are connected with the Email address : {this.state.email}</p> 
          ) : (
          <form className="d-flex flex-column align-items-center" onSubmit={this.handleSubmit} >
            <div className="col-md-4 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className={`form-control ${this.state.firstName ? 'is-valid' : 'is-invalid'}`} id="firstName" onChange={this.handleFirstNameChange} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className={`form-control ${this.state.lastName ? 'is-valid' : 'is-invalid'}`} id="lastName" onChange={this.handleLastNameChange} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className={`form-control ${this.state.emailIsValid ? 'is-valid' : 'is-invalid'}`} id="email" onChange={this.handleEmailChange} />
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className={`form-control ${this.state.passwordIsValid ? 'is-valid' : 'is-invalid'}`} id="password" onChange={this.handlePasswordChange} />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="validationFormCheck1" onChange={this.handleRememberMeChange} />
              <label className="form-check-label" htmlFor="validationFormCheck1">Remember me</label>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit" >Submit</button>
            </div>
      </form>
            )}
      </div>
    )

  
  }
}

export default App