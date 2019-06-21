import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CommentApp from './components/CommentApp/CommentApp';
import Topics from './components/Topics/Topic';
import Index from './components/Theme/Index';

export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/comment" component={CommentApp} />
          <Route path="/topics" component={Topics} />
          <Route path="/index" component={Index} />
        </div>
      </BrowserRouter>
    );
  }
}
