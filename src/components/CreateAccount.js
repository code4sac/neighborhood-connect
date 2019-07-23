import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      neighborhoods: [],
    }
  }
  
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/orgs')
      .then((response)  => {
        let newState = {...this.state};
        newState.neighborhoods = response.data.rows;
        this.setState(newState);
        console.log(this.state.neighborhoods);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <>
        <h2>Create and Account</h2>
        <form
            method='POST'
            action='/createAccount'
        >
          <label htmlFor='name'>
            Name
            <input
              required
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="neighborhood">
            <select>
              {this.state.neighborhoods.map(hood => {
                return (
                  <option value={hood.district} key={hood.name}>{hood.name}</option>
                )
              })}
            </select>
          </label>
          <label htmlFor='password'>
            Password
            <input
              required
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.saveToState}
            />
          </label>
          <button type='submit'>Sign Up!</button>
        </form>
      </>
    )
  }
}

