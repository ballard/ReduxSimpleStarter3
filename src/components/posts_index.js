/**
 * Created by ivanlazarev on 14.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
    componentWillMount() {  //called just before component appears on the DOM - lifecycle method
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>list of posts</div>
        );
    };
}

export default connect(null, { fetchPosts })(PostsIndex);

//JSX syntax rules!!!
//equals to
// export default connect(null, { fetchPosts: fetchPosts } )(PostsIndex);
//equals to
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);