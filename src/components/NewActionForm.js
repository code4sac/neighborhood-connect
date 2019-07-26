import React, { Component } from 'react';
import Header from './Header';

export default class NewEventForm extends Component {
  state = {
    name: '',
    type: '',
    date: '',
    goal: '',
    details: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <div className="actionspage">
            <Header title={"Add New Event"} />
            <div>
                <form
                    className="form"
                    name="new-event"
                    //Consider refactoring this POST to a method outside of the form tag
                    onSubmit={async e => {
                        e.preventDefault();
                        fetch("INSERT_POST_URL", {
                            method: "POST",
                            body: JSON.stringify(this.state)
                        }).then(this.setState({ name: "", type: "", date: "", goal: "", details: "" }));
                    }}
                >
                    <label className="form__label" htmlFor="name">
                        Event Name
                    </label>
                    <input className="form__input" type="text" name="name" value={this.state.name} onChange={this.saveToState} />

                    <label className="form__label" htmlFor="type">
                        What Type of Event?
                    </label>
                    <input className="form__input" type="text" name="type" value={this.state.type} onChange={this.saveToState} />

                    <label className="form__label" htmlFor="date">
                        When?
                    </label>
                    <input className="form__input" type="date" name="date" value={this.state.date} onChange={this.saveToState} />

                    <label className="form__label" htmlFor="goal">
                        Event Goal
                    </label>
                    <input className="form__input" type="text" name="goal" value={this.state.goal} onChange={this.saveToState} />

                    <label className="form__label" htmlFor="details">
                        Event Details
                    </label>
                    <textarea className="form__textarea" type="text" name="details" value={this.state.details} onChange={this.saveToState} />
                    <button className="form__btn btn btn--secondary-blue u-margin-top-small" type="submit">
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );
  }
}