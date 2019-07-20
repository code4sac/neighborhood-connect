import React, { Component } from 'react';
import styled from 'styled-components';

const FormStyled = styled.div`
  label {
    width: 100%;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    margin-bottom: 2rem;
  }
  textarea {
    width: 100%;
  }
`;

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
      <>
        <h2>Add a New Event</h2>
        <p>What's up in the community?</p>
        <FormStyled>
          <form 
            name='new-event'
            onSubmit={async e => {
              e.preventDefault()
              fetch('INSERT__URL', { 
                method: 'POST',
              headers: 'change this to the headers later!',
              body: JSON.stringify(this.state)}
              )
                .then(this.setState({name:'',type:'',date:'',goal:'',details:''}))
            }}>
            <label for='name'>Event Name</label>
            <input 
              type='text' 
              name='name' 
              value={this.state.name}
              onChange={this.saveToState}/>

            <label for='type'>What Type of Event?</label>
            <input 
              type='text' 
              name='type' 
              value={this.state.type}
              onChange={this.saveToState}/>
          
            <label for='date'>When?</label>
            <input 
              type='date' 
              name='date' 
              value={this.state.date}
              onChange={this.saveToState}/>
            
            <label>Event Goal</label>
            <input 
              type='text' 
              name='goal' 
              value={this.state.goal}
              onChange={this.saveToState}/>
            
            <label for='details'>Event Details</label>
            <textarea type='text' 
              name='details' 
              value={this.state.details}
              onChange={this.saveToState}
              />
            <button type='submit'>Create Event</button>
          </form>
        </FormStyled>
      </>
    )
  }
}

export { FormStyled }