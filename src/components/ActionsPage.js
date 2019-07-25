import React, { Component } from "react";
import axios from 'axios';

import Header from './Header';
import { apiUrl } from '../config';
import Action from './Action';
import right from "../assets/chevron-right-white.svg";


export default class ActionsPage extends Component {
  state = {
    actions: []
  }

  share = () => {
    var url = "http://google.com";
    var text = "Replace this with your text";
    window.open("http://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text), "", "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0");
  };

  componentDidMount() {
    const priorityId = this.props.match.params.priorityId //matching id from router params
    const fetchActions = async () => {
      const res = await axios.get(
        `${apiUrl}/events/${priorityId}`
      );
      this.setState({
        actions: res.data,
      })
    };
    fetchActions();
  }

  render() {
    return (
      <div>
        <Header title={'Actions'} option={"/newAction"} optionName={'New Action'} />
        <div className='action'>
          <ul className='action__list'>
            {this.state.actions.map(action => (
              <Action
                id={action.id}
                avatar={action.avatar} //need from DB
                location={action.location} //need from DB
                title={action.title}
                date={action.timestamp}
                description={action.description}
              />
            ))}
          </ul>
          <img className="action__arrow" src={right} alt="arrow" />
        </div>
      </div>
    );
  }
}
