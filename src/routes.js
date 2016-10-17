/**
 * Created by ivanlazarev on 14.10.16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostsShow}/>
    </Route>
);

// posts/:id is a way to this.props.params.id in PostsShow component