/**
 * Created by ivanlazarev on 17.10.16.
 */
import React, { Component } from 'react';

class PostsShow extends Component{
    render() {
        return <div>Show post {this.props.params.id}</div>;
    }
}

export default PostsShow;