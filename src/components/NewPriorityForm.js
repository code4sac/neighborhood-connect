import React, { Component } from 'react'

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
          <form 
            name='new-priority'
            onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Priority Name</label>
            <input 
              type='text' 
              name='name' 
              value={this.state.name}
              onChange={this.saveToState}/>

            <label htmlFor='details'>Priority Details</label>
            <textarea type='text' 
              name='details' 
              value={this.state.details}
              onChange={this.saveToState}
              />
            <button type='submit'>Add Priority</button>
          </form>
        </div>
        )
    }
}
