import React, { Component } from 'react';
import axios from 'axios';

import { apiUrl } from '../config';

export default class NewPriorityForm extends Component {
  state = {
    priority_type_id: 1, // hard coded for db
    description: "",
    visibility: true,  // hard coded for db
    priority_status_type_id: 4,  // hard coded for db
    organization_id: null,
    rank: null,
    user_id: 2,  // hard coded for db
    prioritytype: "",
  }

  componentDidMount = () => {
    this.setState({ organization_id: parseInt(this.props.orgId) })
    axios.get(`${apiUrl}/priorities/orgs/${this.props.orgId}`)
      .then(res => this.setState({ rank: res.data.length + 1 }));
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  createNewPriority = async e => {
    e.preventDefault();
    console.log(this.state)
    fetch(`${apiUrl}/priorities`, {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
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
            <button type='submit'>Add Priority</button>
          </form>
        </div>
      </>
    )
  }
}
