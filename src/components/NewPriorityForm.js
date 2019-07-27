import React, { Component } from 'react';
import Header from './Header';
import HeaderBlock from './HeaderBlock';

export default class NewPriorityForm extends Component {
    state = {
        name: '',
        details: '',
    }
    
    saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch('INSERT__URL', { 
          method: 'POST',
          body: JSON.stringify(this.state)}
          )
        .then(this.setState({name:'',details:''}))
        .catch(err => console.log(err))    
    }
    
    render() {
        return (
            <div>
                <Header title={"Add New Priority"} />
                <div className="formpages">
                  <HeaderBlock name={"Add New Priority"} description={"Noticed something new in your community?"} />
                <form className="form" name="new-priority" onSubmit={this.handleSubmit}>
                    <label className="form__label" htmlFor="name">
                        Priority Name
                    </label>
                    <input className="form__input" type="text" name="name" value={this.state.name} onChange={this.saveToState} placeholder="Textfield" />

                    <label className="form__label" htmlFor="details">
                        Priority Details
                    </label>
                    <textarea className="form__textarea" type="text" name="details" value={this.state.details} onChange={this.saveToState} placeholder="Textfield" />
                    <button className="form__btn btn btn--primary-blue u-margin-top-small" type="submit">
                        Add Priority
                    </button>
                </form>
                </div>
            </div>
        );
    }
}
