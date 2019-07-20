import React, { Component } from 'react'
import FormStyled from './NewEventForm';

export default class NewPriorityForm extends Component {
    state = {
        name: '',
        details: '',
    }
    render() {
        return (
            <>
        <h2>Add a New Priority</h2>
        <p>What's new in the community?</p>
        <FormStyled>
          <form 
            name='new-priority'
            onSubmit={async e => {
              e.preventDefault();
              fetch('INSERT__URL', { 
                method: 'POST',
              body: JSON.stringify(this.state)}
              )
                .then(this.setState({name:'',details:''}))
            }}>
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
        </FormStyled>
      </>
        )
    }
}
