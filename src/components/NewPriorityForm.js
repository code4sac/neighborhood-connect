import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';
import Header from './Header';
import HeaderBlock from './HeaderBlock';

export default class NewPriorityForm extends Component {
  state = {
    priority_type_id: 1, // needs to be 1 to keep value for post request if dropdown is unchanged
    description: "",
    visibility: true,  // hard coded for db post
    priority_status_type_id: 1,  // what exactly is this?
    organization_id: null,
    rank: null,
    user_id: 9,  // hard coded for db post
    types: [] // stores priority types for dropdown
  }

  componentDidMount = () => {
    this.setState({ organization_id: parseInt(this.props.orgId) })
    axios.get(`${apiUrl}/priorities/orgs/${this.props.orgId}`)
      .then(res => this.setState({ rank: res.data.length + 1 }));
    axios.get(`${apiUrl}/types`)
      .then(res => {
        const updatedTypes = [...res.data.rows]
        this.setState({ types: updatedTypes })
      })
  }

  saveToState = e => {
    if (e.target.name === "priority_type_id") {
      this.setState({ priority_type_id: parseInt(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  createNewPriority = async e => {
    e.preventDefault();
    fetch(`${apiUrl}/priorities`, {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priority_type_id: this.state.priority_type_id,
        description: this.state.description,
        visibility: true,  // hard coded for db
        priority_status_type_id: 1,  // what exactly is this?
        organization_id: this.state.organization_id,
        rank: this.state.rank,
        user_id: 9,  // hard coded for db
        // prioritytype: this.state.types[this.state.priority_type_id - 1].name,
      })
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))

  }

  render() {
    return (
      <>
        <h2>Add a New Priority</h2>
        <p>What's new in the community?</p>
        <div>
          <form
            name='new-priority'
            onSubmit={this.createNewPriority}>
            <label htmlFor='prioritytype' style={{ color: 'black' }}>Priority Type</label>
            <input
              type='text'
              name='prioritytype'
              value={this.state.prioritytype}
              onChange={this.saveToState} />

            <label htmlFor='description' style={{ color: 'black' }}>Priority Description</label>
            <textarea type='text'
              name='description'
              value={this.state.description}
              onChange={this.saveToState}
            />

            <label htmlFor='priority_type_id' style={{ color: 'black' }}>Priority Type</label>
            <select name='priority_type_id' onChange={this.saveToState}>
              {this.state.types.map(type => (
                <option value={type.id}>{type.name}</option>
              ))}
            </select>

            <button type='submit'>Add Priority</button>
          </form>
        </div>
      </>
    )
  }
}
