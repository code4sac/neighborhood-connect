import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import { apiUrl } from "../config";
import Action from "./Action";
import action from "../assets/edit.svg";
import placeholder from "../assets/placeholder.jpg";

export default class ActionsPage extends Component {
    state = {
        actions: []
    };

    share = () => {
        var url = "http://google.com";
        var text = "Replace this with your text";
        window.open("http://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text), "", "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0");
    };

    componentDidMount() {
        const priorityId = this.props.match.params.priorityId; //matching id from router params
        const fetchActions = async () => {
            const res = await axios.get(`${apiUrl}/actions/priorities/${priorityId}`);
            this.setState({
                actions: res.data
            });
        };
        fetchActions();
    }

    render() {
        let avatar = action.avatar ? action.avatar : placeholder;

        let actionsList = this.state.actions.map( (action, index) => (
            <Action
                id={action.id}
                key={action.id}
                avatar={avatar} //need from DB
                location={action.location} //need from DB
                title={action.title}
                date={action.timestamp}
                description={action.description}
                style={{ animationDelay: `${index / 15}s` }}
            />
        ));
        return (
            <div>
                <Header title={"Actions"} option={`/newAction/${this.props.match.params.priorityId}`} optionName={"New Action"} optionIcon={action} />
                <div className="details">
                    <h2 className="heading-secondary u-margin-bottom-small">Future Events</h2>
                    {actionsList}
                </div>
            </div>
        );
    }
}
