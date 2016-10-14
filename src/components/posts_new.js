/**
 * Created by ivanlazarev on 14.10.16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class  PostsNew extends Component {
    render() {
        const { fields: {title, categories, content}, handleSubmit } = this.props;
        //equals to
        // const title = this.props.fields.title;
        // etc...
        //const handleSubmit = this.props.handleSubmit;

        // below {...title} is extraction from props

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                 <h3>Create a new Post</h3>

                 <div className="form-group">
                     <label>Title</label>
                     <input type="text" className="form-control" {...title}/>
                     <div className="text-help">
                         {title.touched ? title.error : ''}
                     </div>
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

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    return errors;

}

// connect: 1 mapStateToProps, 2 mapDispatchToProps
// reduxForm 1 form config, 2 mapStateToProps, 3 mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);