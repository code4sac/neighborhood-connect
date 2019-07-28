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
                    <input className="form__input" type="text" name="name" value={this.state.name} onChange={this.saveToState} placeholder="Textfield" required />

                    <label className="form__label" htmlFor="details">
                        Priority Details
                    </label>
                    <textarea className="form__textarea" type="text" name="details" value={this.state.details} onChange={this.saveToState} placeholder="Textfield" required />
                    <button className="form__btn btn btn--primary-blue u-margin-top-small" type="submit">
                        Add Priority
                    </button>
                </form>
                </div>
            </div>
        );
    }
}
