import React, { Component } from 'react';
import axios from 'axios';

import { apiUrl } from '../config';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      neighborhoods: [],
      organization_id: ''
    }
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios.get(`${apiUrl}/orgs`)
      .then((response) => {
        let newState = { ...this.state };
        newState.neighborhoods = response.data;
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
          onSubmit={async e => {
            e.preventDefault();
            // fetch below does send correct request, backend not propped for db queries.
            fetch(`${apiUrl}/users`, {
              method: 'POST',
              mode: 'cors',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
              })
            })
              .then(response => (
                this.setState({ first_name: '', last_name: '', email: '', phone: '', password: '', passwordConfirm: '' })
              ))
          }}>
          >
          <label htmlFor='first_name'>
            First Name
            <input
              required
              type='text'
              name='first_name'
              placeholder='first'
              value={this.state.first_name}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor='last_name'>
            Last Name
            <input
              required
              type='text'
              name='last_name'
              placeholder='last'
              value={this.state.last_name}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              required
              type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor='phone'>
            Phone
            <input
              type='text'
              name='phone'
              placeholder='1234567890'
              value={this.state.phone}
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