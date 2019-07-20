import React, { Component } from 'react';
import styled from 'styled-components';

const PostStyled = styled.div`
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
  button {
    font-size: 1.5rem;
    width: 150px;
    height: 40px;
  }
`;

export default class PostPage extends Component {
  
  share = () => {
    var url = "http://google.com";
    var text = "Replace this with your text";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

  render() {
    return (
      <PostStyled>
        <img src={'an image'} />
        <h2>Title</h2>
        <p>07/20/2019</p>
        <p>Some details of the page event.</p>
        <button onClick={() => {this.share()}}> Share </button>
      </PostStyled>
    );
  }
}
