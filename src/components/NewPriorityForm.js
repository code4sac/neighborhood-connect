import React, { Component } from "react";
import axios from "axios";
import { apiUrl } from "../config";
import Header from "./Header";
import HeaderBlock from "./HeaderBlock";
import Success from "./Success";

export default class NewPriorityForm extends Component {
    state = {
        priority_type_id: 1, // needs to be 1 to keep value for post request if dropdown is unchanged
        description: "",
        visibility: true, // hard coded for db post
        priority_status_type_id: 1, // what exactly is this?
        organization_id: null,
        rank: null,
        user_id: 9, // hard coded for db post
        prioritytype: "",
        types: [], // stores priority types for dropdown
        formStatus: false
    };

    componentDidMount = () => {
        this.setState({ organization_id: parseInt(this.props.orgId) });
        axios.get(`${apiUrl}/priorities/orgs/${this.props.orgId}`).then(res => this.setState({ rank: res.data.length + 1 }));
        axios.get(`${apiUrl}/types`).then(res => {
            const updatedTypes = [...res.data.rows];
            this.setState({ types: updatedTypes });
        });
    };

    saveToState = e => {
        if (e.target.name === "priority_type_id") {
            this.setState({ priority_type_id: parseInt(e.target.value) });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    clearPayload() {
        this.setState({
            prioritytype: "",
            description: "",
            formStatus: true
        });

        this.change = setTimeout(() => {
            this.setState({ formStatus: false });
        }, 2500);
    }

    createNewPriority = e => {
        e.preventDefault();
        fetch(`${apiUrl}/priorities`, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                priority_type_id: this.state.priority_type_id,
                description: this.state.description,
                visibility: true, // hard coded for db
                priority_status_type_id: 1, // what exactly is this?
                organization_id: this.state.organization_id,
                rank: this.state.rank,
                user_id: 9 // hard coded for db
            })
        })
        .then(res => console.log(res))
        .then(this.clearPayload())
        .catch(err => console.error(err));
    };

    render() {
        let status = this.state.formStatus ? <Success message={"Successfully Added Priority"} /> : "";

        return (
            <div>
                <Header title={"Add New Priority"} />
                <div className="formpages">
                    <HeaderBlock name={"Add New Priority"} description={"Noticed something new in your community?"} />
                    <form className="form" name="new-priority" onSubmit={this.createNewPriority}>
                        <label className="form__label" htmlFor="priority_type_id">
                            Priority Type
                        </label>
                        <select className="form__select" name="priority_type_id" onChange={this.saveToState}>
                            {this.state.types.map(type => (
                                <option value={type.id} key={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>

                        <label className="form__label" htmlFor="description">
                            Priority Description
                        </label>
                        <textarea className="form__textarea" type="text" name="description" value={this.state.description} onChange={this.saveToState} placeholder="Description" required />

                        <button className="form__btn btn btn--primary-blue u-margin-top-small" type="submit">
                            Add Priority
                        </button>
                    </form>
                </div>
                {status}
            </div>
        );
    }
}
