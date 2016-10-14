/**
 * Created by ivanlazarev on 14.10.16.
 */
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'

class  PostsNew extends Component {


    //getting context for this from parent
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // navigate to index if post created
                //call this.context.router.push
                this.context.router.push('/');
        });
    }

    render() {
        const { fields: {title, categories, content}, handleSubmit } = this.props;
        //equals to
        // const title = this.props.fields.title;
        // etc...
        //const handleSubmit = this.props.handleSubmit;

        // below {...title} is extraction from props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                 <h3>Create a new Post</h3>

                 <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                     <label>Title</label>
                     <input type="text" className="form-control" {...title}/>
                     <div className="text-help">
                         {title.touched ? title.error : ''}
                     </div>
                 </div>

                 <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                     <label>Categories</label>
                     <input type="text" className="form-control" {...categories}/>
                     <div className="text-help">
                         {categories.touched ? categories.error : ''}
                     </div>
                 </div>

                 <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                     <label>Content</label>
                     <textarea type="text" className="form-control" {...content}/>
                     <div className="text-help">
                         {content.touched ? content.error : ''}
                     </div>
                 </div>

                 <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    };
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }


    if (!values.categories) {
        errors.categories = 'Enter categories';
    }


    if (!values.content) {
        errors.content = 'Enter some content';
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