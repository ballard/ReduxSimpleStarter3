/**
 * Created by ivanlazarev on 14.10.16.
 */
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for this post'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
};

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

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        //equals to
        // const title = this.props.fields.title;
        // etc...
        //const handleSubmit = this.props.handleSubmit; where handleSubmit is a helper function provided by redux-form

        // below {...title} is extraction from props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                 <h3>Create a new Post</h3>

                {_.map(FIELDS, this.renderField.bind(this))}

                 <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    };
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });

    return errors;

}

// connect: 1 mapStateToProps, 2 mapDispatchToProps
// reduxForm 1 form config, 2 mapStateToProps, 3 mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: _.keys(FIELDS),
    validate
}, null, { createPost })(PostsNew);