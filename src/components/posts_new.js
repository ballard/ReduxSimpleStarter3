/**
 * Created by ivanlazarev on 14.10.16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class  PostsNew extends Component {
    render() {
        const { fields: {title, categories, content}, handleSubmit } = this.props;
        console.log(title);

        //equals to
        // const title = this.props.fields.title;
        // etc...
        //const handleSubmit = this.props.handleSubmit;
        return (
            <form onSubmit={handleSubmit}>
                <h3>Create a new Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/> //{...title} is extraction from props
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn button-primary">Submit</button>
            </form>
        );
    };
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);


