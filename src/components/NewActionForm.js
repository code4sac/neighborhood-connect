import React, { Component } from 'react';

import Header from './Header';
import HeaderBlock from './HeaderBlock';
import { apiUrl } from '../config';

export default class NewEventForm extends Component {
  state = {
    title: '',
    description: '',
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <div>
            <Header title={"Add New Action"} />
            <div className="formpages">
                <HeaderBlock name={"Add New Action"} description={"Want to add a new action in your community?"} />
                <form
                    className="form"
                    name="new-event"
                    // Consider refactoring this POST to a method outside of the form tag
                    onSubmit={async e => {
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
                        }).then(this.setState({ title: "", description: "" }));
                    }}
                >
                    <label className="form__label" htmlFor="title">
                        Action Title
                    </label>
                    <input className="form__input" type="text" name="title" value={this.state.title} onChange={this.saveToState} />
                    <label className="form__label" htmlFor="description">
                        Action Description
                    </label>
                    <textarea className="form__textarea" type="text" name="description" value={this.state.description} onChange={this.saveToState} />
                    <button className="form__btn btn btn--primary-blue u-margin-top-small" type="submit">
                        Create Action
                    </button>
                </form>
            </div>
        </div>
    );
  }
}