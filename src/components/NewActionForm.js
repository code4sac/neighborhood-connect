import React, { Component } from 'react';

import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Success from './Success';
import { apiUrl } from '../config';

export default class NewEventForm extends Component {
  state = {
    title: '',
    description: '',
    formStatus: false
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearPayload() {
    this.setState({ 
      title: "", 
      description: "", 
      formStatus: true
    });

    this.change = setTimeout(() => {
        this.setState({ formStatus: false });
    }, 2500);
  }

  handleSubmit = e => {
              e.preventDefault();
              const formData = {
                title: this.state.title,
                description: this.state.description,
                priority_id: this.props.match.params.priorityId,
                action_type_id: 1, // required key by DB, needs default or different action types
                visibility: true, // required key by DB
                user_id: 1 // required key by DB, needs to be replaced with user id's when available
              };
              fetch(`${apiUrl}/actions`, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
              })
              .then(res => res.json())
              .then(this.clearPayload())
              .catch(err => console.log(err));
    }

  render() {

    let status = this.state.formStatus ? <Success message={'Successfully Added Action'} /> : '';

    return (
      <div>
        <Header title={"Add New Action"} />
        <div className="formpages">
          <HeaderBlock name={"Add New Action"} description={"Want to add a new action in your community?"} />
          <form
            className="form"
            name="new-event"
            // Consider refactoring this POST to a method outside of the form tag
            onSubmit={this.handleSubmit}
          >
            <label className="form__label" htmlFor="title">
              Action Title
                    </label>
                    <input className="form__input" type="text" name="title" value={this.state.title} onChange={this.saveToState} placeholder="New Action" required />
                    <label className="form__label" htmlFor="description">
                        Action Description
                    </label>
                    <textarea className="form__textarea" type="text" name="description" value={this.state.description} onChange={this.saveToState} placeholder="Description" required />
                    <button className="form__btn btn btn--primary-blue u-margin-top-small" type="submit">
                        Create Action
                    </button>
          </form>
        </div>
        {status}
      </div>
    );
  }
}