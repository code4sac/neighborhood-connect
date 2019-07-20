import React from 'react';
import Post from './Post';

export default class PostContainer extends React.Component {
    render() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}