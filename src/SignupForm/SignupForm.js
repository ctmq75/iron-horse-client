import React, { Component } from  'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: "",
          email: "",

        };
      }
    
      nameChanged(full_name) {
        this.setState({
          full_name
        });
      }
    
     emailChanged(email) {
        this.setState({
          email
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const { full_name, email } = this.state;
        const user = { full_name, email }
        console.log(user)
        const options = {
          method: 'POST',
          body:  JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          }
        };
    
        fetch('http://localhost:8000/api/mailinglist', options)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data => {
            this.setState({
              full_name: "",
              email: "",

            });
            this.props.handleAdd(user);
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          });
      }
  render() {
    return (
      <div className="signup">
        <h2>Sign up for our Mailing List</h2>
        <form className="signup__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" name="full_name" id="full_name" placeholder="John Smith" value={this.state.full_name}
            onChange={e => this.nameChanged(e.target.value)}/>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" placeholder="jsmith@domain.com" value={this.state.email}
            onChange={e => this.emailChanged(e.target.value)}/>
          
          <div className="signup__buttons">
            <button>Cancel</button>
            <button type="submit" >Add me!</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default SignupForm;