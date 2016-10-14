/**
 * Created by ivanlazarev on 14.10.16.
 */
import React, { Component } from 'react';

class PostsIndex extends Component {
    componentWillMount() {  //called just before component appears - lifecycle method
        console.log('calling action creator');
    }

    render() {
        return (
            <div>list of posts</div>
        );
    };
}

export default PostsIndex;