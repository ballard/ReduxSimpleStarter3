/**
 * Created by ivanlazarev on 17.10.16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

    componentWillMount() {  //called just before component appears on the DOM - lifecycle method
        this.props.fetchPost(this.props.params.id);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onDeletePost() {
        console.log(this.props);
        this.props.deletePost(this.props.params.id) //this.props.params - get data from router's url
            .then(() => {
                // navigate to index if post created
                //call this.context.router.push
                this.context.router.push('/');
            });
    }

    render() {

        const { post } = this.props;
        console.log(this.props.post);

        if (!post) {
            return <div>Post loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeletePost.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.title}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);