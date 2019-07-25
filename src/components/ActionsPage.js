import React, { Component } from "react";
import Header from './Header'

export default class ActionPage extends Component {
    share = () => {
        var url = "http://google.com";
        var text = "Replace this with your text";
        window.open("http://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text), "", "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0");
    };

    render() {
        return (
            <div>
                <Header option={"/newAction"}>
                    <img src={"an image"} alt="text about it" />
                    <h2>Event Title</h2>
                    <p>Event Author</p>
                    <p>07/20/2019</p>
                    <button
                        onClick={() => {
                            this.share();
                        }}
                    >
                        {" "}
                        Share{" "}
                    </button>
                </Header>
                <p style={{ fontSize: "50px", color: "red" }}>Some details of the page event.</p>
            </div>
        );
    }
}
