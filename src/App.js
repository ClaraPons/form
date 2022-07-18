import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  handleEmailChange =()
    
  
  render (){
    return(
      <div  class="m-5">
      <h1 class="text-center">Login</h1>
      <form class="was-validated d-flex flex-column align-items-center" >
            <div class="col-md-4 mb-3">
              <label for="validationServer01" class="form-label">Email address</label>
              <input type="email" class="form-control is-valid" id="validationServer01"  required/>
            </div>
            <div class="col-md-4 mb-4">
              <label for="validationServer01" class="form-label">Password</label>
              <input type="text" class="form-control is-valid" id="validationServer01"  required/>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
              <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary" type="submit" >Submit</button>
            </div>
      </form>
      </div>
    )

  
  }
}

export default App