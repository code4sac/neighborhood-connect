import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
      <form action='/' method='POST'>
         <label htmlFor='email'>Email</label>
         <input type='email' name='email' value={this.state.email} onChange={this.saveToState}/>
         <label htmlFor='password'>Email</label>
         <input type='password' name='password' value={this.state.password} onChange={this.saveToState}/>
         <input type='submit' value='Login!'></input>
      </form>
    </div>
    )
  }
}
